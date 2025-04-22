'use client';

import ContainerDefault from '@/components/ContainerDefault';
import ServiceContainers from '@/components/ServiceContainers';
import Title from '@/components/Texts/title';
import React from 'react';

export default function Dashboard() {
  return (
    <div className=" w-full h-screen  flex flex-col justify-start">
      <Title title="Overview" className="text-black font-bold text-xl text-start pb-12" />
      {/* O conteúdo que pode ser rolado */}
      <div className="flex-grow overflow-auto space-y-4 w-full">
        <ServiceContainers />

        <ContainerDefault title="Blog / postagens" redirect="/cadastra-blog">
          <Title title="teste" />
        </ContainerDefault>
        <ContainerDefault title="Tarefas">
          <Title title="teste" />
        </ContainerDefault>
      </div>
    </div>
  );
}
