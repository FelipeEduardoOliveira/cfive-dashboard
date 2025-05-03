'use client';

import { useEdit } from '@/context/EditContext';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaRegFolderOpen } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { MdHomeRepairService } from 'react-icons/md';
import { RiHomeLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

const Menu = () => {
  const history = useRouter();
  const pathname = usePathname();
  const { clearFields } = useEdit();

  const handleMenuClick = (redirect: string) => {
    clearFields();
    history.push(redirect);
  };

  const itemMenu = [
    {
      icon: <RiHomeLine className="w-7 h-7" />,
      name: 'Overview',
      disable: false,
      redirect: '/dashboard',
    },
    {
      icon: <FaRegFolderOpen className="w-7 h-7" />,
      name: 'Páginas',
      disable: true,
      redirect: '/',
    },
    {
      icon: <FiPlus className="w-7 h-7" />,
      name: 'Blog',
      disable: false,
      redirect: '/dashboard/nova-postagem',
    },
    {
      icon: <MdHomeRepairService className="w-7 h-7" />,
      name: 'Serviços',
      disable: false,
      redirect: '/dashboard/novo-servico',
    },
    {
      icon: <RxHamburgerMenu className="w-7 h-7" />,
      name: 'Cadastro',
      disable: true,
      redirect: '/',
    },
  ];

  return (
    <div className="w-full max-w-96 h-20 rounded-[28px] bg-[#2A2B3060] flex justify-between items-center p-4 z-10 my-3">
      {itemMenu.map((item, index) => {
        const isSelected = pathname === item.redirect;
        return (
          <button
            key={index}
            onClick={() => handleMenuClick(item.redirect)}
            disabled={item.disable}
            type="button"
            className={`flex flex-col items-center justify-center cursor-pointer p-2 rounded-full transition-all
              ${isSelected ? 'bg-[#EFF5FF] text-[#1943DC] animate-drip' : 'text-[#EFF5FF]'}
              ${item.disable ? 'pointer-events-none opacity-50' : ''}
            `}
          >
            <div className="w-7 h-7">{React.cloneElement(item.icon, { className: 'w-7 h-7' })}</div>
          </button>
        );
      })}
    </div>
  );
};

export default Menu;
