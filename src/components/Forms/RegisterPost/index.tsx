'use client';

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Title from '@/components/Texts/title';
import Input from '@/components/Input';
import { FormButton } from '../../Button';
import { toaster } from '@/utils/toast';
import { loginSchema } from '@/utils/validations/login';
import FieldEditor from '@/components/FieldEditor';

export default function BlogForm() {
  const handleSubmit = (values: { title: string; desciption: string; image: string }) => {
    console.log('Form data:', values);
    toaster.error('Erro ao fazer login!');
    return;
  };

  const initialValues = {
    title: '',
    desciption: '',
    image: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        setSubmitting(false);
      }}
      //   validationSchema={loginSchema}
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
          </div>

          <FormButton title="Enviar" loading={isSubmitting} type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}
