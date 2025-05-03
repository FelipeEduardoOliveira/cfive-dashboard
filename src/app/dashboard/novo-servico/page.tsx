'use client';

import ServiceForm from '@/components/Forms/RegisterServices';
import React from 'react';

export default function NewService() {
  return (
    <div className=" w-full h-screen  flex flex-col justify-start">
      <ServiceForm />
    </div>
  );
}
