'use client';

import { toaster } from '@/utils/toast';

const Header = () => {
  return (
    <div className="flex justify-between w-full max-w-96 border">
      <div onClick={() => toaster.success('Funcionou')}>
        <h1>Nome do usuario</h1>
      </div>

      <div>Logo perfil</div>
    </div>
  );
};

export default Header;
