import React from 'react';
import Title from '../Texts/title';
import { FiPlusCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface ContainerDefaultProps {
  children: React.ReactNode;
  title: string;
  redirect?: string;
}

const ContainerDefault = ({ children, title, redirect }: ContainerDefaultProps) => {
  const history = useRouter();

  const redirectFuncion = () => {
    redirect && history.push(`/dashboard${redirect}`);
  };

  return (
    <div className="flex flex-col items-center w-full h-96 gap-8 rounded-3xl bg-white shadow-lg p-4 my-6">
      <div className="w-full flex justify-between items-center">
        <Title title={title} className="font-bold text-xl text-start" />

        {redirect && <FiPlusCircle className="w-7 h-7 text-[#162155]" onClick={redirectFuncion} />}
      </div>
      <div className="flex  flex-col gap-4 w-full h-full overflow-y-scroll">{children}</div>
    </div>
  );
};

export default ContainerDefault;
