'use client';

import { Formik, Form } from 'formik';
import Title from '@/components/Texts/title';
import Input from '@/components/Input';
import { FormButton } from '../../Button';
import { toaster } from '@/utils/toast';
import FieldEditor from '@/components/FieldEditor';
import Image from 'next/image';
import { uploadImageAndGetUrl } from '@/api/uploadImage'; // <-- sua função aqui
import { useAuth } from '@/context/AuthContext';
import { Timestamp } from 'firebase/firestore';
import { saveService } from '@/api/saveService';
import { useEdit } from '@/context/EditContext';
import ImagePreview from './ImagePreview';
import { updateService } from '@/api/updateService';

interface BlogFormValues {
  serviceName: string;
  desciption: string;
  image: File | null;
}

export default function ServiceForm() {
  const { user } = useAuth();
  const { serviceEdit } = useEdit();

  const save = async (values: any, imageUrl: string) => {
    const finalValues = {
      serviceName: values.serviceName,
      desciption: values.desciption,
      image: imageUrl,
      createBy: user?.displayName || user?.email || user?.uid || 'Anônimo',
      active: true,
      createdAt: Timestamp.now(),
    };

    await saveService(finalValues);
  };

  const update = async (values: any, imageUrl: string) => {
    const finalValues = {
      serviceName: values.serviceName,
      desciption: values.desciption,
      image: imageUrl,
      active: true,
    };

    if (!serviceEdit?.id) {
      toaster.error('Erro: Não identificamos o ID do serviço!');
      return;
    }

    await updateService(serviceEdit.id, finalValues);
  };

  const handleSubmit = async (values: BlogFormValues) => {
    try {
      let imageUrl = '';

      if (values.image instanceof File) {
        imageUrl = await uploadImageAndGetUrl(values.image, 'servicesImage');
      } else {
        imageUrl = values.image || '';
      }
      if (serviceEdit) {
        await update(values, imageUrl);
        toaster.success('Serviço atualizado com sucesso!');
      } else {
        await save(values, imageUrl);
        toaster.success('Serviço enviado com sucesso!');
      }
    } catch (err) {
      console.error(err);
      toaster.error('Erro ao enviar Serviço!');
    }
  };

  const initialValues: BlogFormValues = {
    serviceName: '',
    desciption: '',
    image: null,
  };

  return (
    <Formik
      initialValues={serviceEdit || initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        setSubmitting(false);
      }}
      validateOnChange={true}
    >
      {({ values, handleChange, setFieldValue, isSubmitting, errors, touched }) => (
        <Form className="flex flex-col justify-center gap-8 w-full">
          <div>
            <Title title="Novo serviço" />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Input
                title="Nome do serviço"
                placeholder="Nome do serviço"
                type="text"
                name="serviceName"
                value={values.serviceName}
                onChange={handleChange}
                helperText={errors.serviceName || undefined}
                touched={touched.serviceName}
              />
            </div>

            <div className="col-span-12">
              <FieldEditor
                value={values.desciption}
                onChange={(newContent) => setFieldValue('desciption', newContent)}
              />
            </div>

            <div className="col-span-12">
              <label className="block mb-2 text-sm font-medium text-gray-700">Imagem de capa</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFieldValue('image', file);
                  }
                }}
              />
              <ImagePreview image={values.image} />
            </div>
          </div>

          <FormButton
            title={serviceEdit ? 'Atualizar' : 'Salvar'}
            loading={isSubmitting}
            type="submit"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}
