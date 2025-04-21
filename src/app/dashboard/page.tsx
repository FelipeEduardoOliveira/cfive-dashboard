'use client';

import Title from '@/components/Texts/title';
import React from 'react';

export default function Dashboard() {
  return (
    <div className=" w-full h-screen  flex flex-col justify-start">
      <Title title="Overview" className="text-black font-bold text-xl text-start" />
      {/* O conteúdo que pode ser rolado */}
      <div className="flex-grow overflow-auto space-y-4 w-full"></div>
    </div>
  );
}
