'use client';

import React from 'react';
import Input from './components/Input';
import Title from './components/Texts/title';
import Paragraph from './components/Texts/paragraph';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="">
        <Title title="Bem vindo ao Dash C-five" />
        <Paragraph title="Digite seu login e senha para iniciar" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <Input onChange={(val) => console.log({ val })} title="Nome" type="text" />
        </div>
        <div className="col-span-12">
          <Input onChange={(val) => console.log({ val })} title="Senha" type="password" />
        </div>
      </div>
    </div>
  );
}
