'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import Title from '@/components/Texts/title';
import Paragraph from '@/components/Texts/paragraph';
import Input from '@/components/Input';
import { FormButton } from '../../Button';
import { toaster } from '@/utils/toast';
import { loginSchema } from '@/utils/validations/login';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const history = useRouter();

  const handleSubmit = (values: { nome: string; senha: string }) => {
    console.log('Form data:', values);
    toaster.error('Erro ao fazer login!');
    history.push('/dashboard');
    return;
  };

  return (
    <Formik
      initialValues={{ nome: '', senha: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        toaster.success('Login realizado com sucesso!');
        setSubmitting(false);
      }}
      validationSchema={loginSchema}
      validateOnChange={true}
    >
      {({ values, handleChange, isSubmitting, errors, touched }) => (
        <Form className="flex flex-col justify-center gap-8 w-full max-w-96">
          <div>
            <Title title="Bem vindo" />
            <Paragraph title="Conectando ideias com tecnologia" />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Input
                title="Nome"
                placeholder="Nome"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                helperText={errors.nome || undefined}
                touched={touched.nome}
              />
            </div>
            <div className="col-span-12">
              <Input
                title="Senha"
                helperText={errors.senha || undefined}
                placeholder="Senha"
                type="password"
                name="senha"
                value={values.senha}
                onChange={handleChange}
                touched={touched.senha}
              />
            </div>
            <div className="col-span-6" />
            <div className="col-span-6 text-end text-blue-900 cursor-pointer underline">
              <a>Esqueci a senha</a>
            </div>
          </div>

          <FormButton title="Entrar" loading={isSubmitting} type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}
