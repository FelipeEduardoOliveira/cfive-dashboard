'use client';

import React from 'react';
import LoginForm from '@/components/Forms/Login';

export default function Home() {
  return (
    <div className=" flex justify-center items-center min-h-screen p-2.5">
      <LoginForm />
    </div>
  );
}
