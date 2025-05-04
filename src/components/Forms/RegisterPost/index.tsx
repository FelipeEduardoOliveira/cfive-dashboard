'use client';

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Title from '@/components/Texts/title';
import Input from '@/components/Input';
import { FormButton } from '../../Button';
import { toaster } from '@/utils/toast';
import FieldEditor from '@/components/FieldEditor';
import { uploadImageAndGetUrl } from '@/api/uploadImage'; // <-- sua função aqui
import { saveBlogPost } from '@/api/savePost';
import { useAuth } from '@/context/AuthContext';
import {
  formatFromFirebaseTimestamp,
  formatToFirebaseTimestamp,
} from '@/utils/formatToFirebaseTimestamp';
import { Timestamp } from 'firebase/firestore';
import { updatePost } from '@/api/updatePost';
import { useEdit } from '@/context/EditContext';
import ImagePreview from '../RegisterServices/ImagePreview';

interface BlogFormValues {
  title: string;
  desciption: string;
  image: File | null;
  publicIn: Date | string;
}

export default function BlogForm() {
  const { user } = useAuth();
  const { blogEdit } = useEdit();

  const save = async (values: any, imageUrl: string) => {
    const publicDate = values.publicIn ? new Date(values.publicIn) : new Date();

    const finalValues = {
      title: values.title,
      desciption: values.desciption,
      image: imageUrl,
      createBy: user?.displayName || user?.email || user?.uid || 'Anônimo',
      publicIn: formatToFirebaseTimestamp(publicDate),
      active: true,
      createdAt: Timestamp.now(),
    };

    await saveBlogPost(finalValues);
  };

  const update = async (values: any, imageUrl: string) => {
    const finalValues = {
      title: values.title,
      desciption: values.desciption,
      image: imageUrl,
      active: true,
    };

    if (!blogEdit?.id) {
      toaster.error('Erro: Não identificamos o ID do serviço!');
      return;
    }

    await updatePost(blogEdit.id, finalValues);
  };

  const handleSubmit = async (values: BlogFormValues) => {
    try {
      let imageUrl = '';

      if (values.image instanceof File) {
        imageUrl = await uploadImageAndGetUrl(values.image, 'servicesImage');
      } else {
        imageUrl = values.image || '';
      }

      if (blogEdit) {
        await update(values, imageUrl);
        toaster.success('Post atualizado com sucesso!');
      } else {
        await save(values, imageUrl);
        toaster.success('Post enviado com sucesso!');
      }
    } catch (err) {
      console.error(err);
      toaster.error('Erro ao enviar post!');
    }
  };

  const returnInitialValues = () => {
    let val: BlogFormValues;
    if (blogEdit) {
      val = {
        title: blogEdit.title,
        desciption: blogEdit.desciption,
        image: blogEdit.image,
        publicIn: blogEdit.publicIn
          ? formatFromFirebaseTimestamp(blogEdit.publicIn).toISOString().slice(0, 16)
          : '',
      };
    } else {
      val = {
        title: '',
        desciption: '',
        image: null,
        publicIn: '',
      };
    }

    return val;
  };

  return (
    <Formik
      initialValues={returnInitialValues()}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        setSubmitting(false);
      }}
      validateOnChange={true}
    >
      {({ values, handleChange, setFieldValue, isSubmitting, errors, touched }) => (
        <Form className="flex flex-col justify-center gap-8 w-full">
          <div>
            <Title title="Novo post" />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Input
                title="Titulo"
                placeholder="Titulo"
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                helperText={errors.title || undefined}
                touched={touched.title}
              />
            </div>

            <div className="col-span-12">
              <FieldEditor
                value={values.desciption}
                onChange={(newContent) => setFieldValue('desciption', newContent)}
              />
            </div>
            <div className="col-span-12">
              <Input
                title=""
                type="datetime-local"
                name="publicIn"
                value={values.publicIn}
                onChange={handleChange}
                helperText={errors.publicIn || undefined}
                touched={touched.publicIn}
              />
            </div>

            <div className="col-span-12">
              <Title className="block mb-2 text-base font-bold" title="Imagem de capa" />

              <label
                htmlFor="image-upload"
                className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer transition-colors duration-200"
              >
                Selecionar imagem
              </label>

              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFieldValue('image', file);
                  }
                }}
              />

              {values.image ? (
                <ImagePreview image={values.image} />
              ) : (
                <div className="w-96 h-52 mt-4 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                  Pré-visualização da imagem
                </div>
              )}
            </div>
          </div>

          <FormButton
            title={blogEdit ? 'Atualizar' : 'Salvar'}
            loading={isSubmitting}
            type="submit"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}
