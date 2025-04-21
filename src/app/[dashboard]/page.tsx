'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen p-2.5 w-full ">
      <div className="bg-amber-300 w-full max-w-96">Cabeçalho</div>
      <div className="bg-emerald-400 w-full max-w-96">
        <h1>Wellcome to dashboard page</h1>
      </div>
      <div className="bg-orange-500 w-full max-w-96">
        <h1>Rodapé</h1>
      </div>
    </div>
  );
}
