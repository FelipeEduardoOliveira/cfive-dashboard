import React, { useEffect } from 'react';
import Title from '../Texts/title';
import { IoMdArrowForward } from 'react-icons/io';
import { getAllServices } from '@/api/firestore';
import { useEdit } from '@/context/EditContext';
import { useRouter } from 'next/navigation';

const ServiceContainers = () => {
  const { setServiceEdit } = useEdit();
  const history = useRouter();
  const [services, setServices] = React.useState<any[]>([]);

  //   {
  //     name: 'Staff',
  //     image: bgStaff.src,
  //     to: '/#',
  //   },
  //   {
  //     name: 'Promotor',
  //     image: bgPomotor.src,
  //     to: '/#',
  //   },
  //   {
  //     name: 'Blitz',
  //     image: bgBlitz.src,
  //     to: '/#',
  //   },
  //   {
  //     name: 'Incentivo',
  //     image: bgIncent.src,
  //     to: '/#',
  //   },
  //   {
  //     name: 'Lançamento',
  //     image: bgLaunch.src,
  //     to: '/#',
  //   },
  //   {
  //     name: 'Promoção',
  //     image: bgPromotion.src,
  //     to: '/#',
  //   },
  // ];

  const allServices = async () => {
    const all = await getAllServices();
    if (!all.error && all.posts.length > 0) {
      setServices(all.posts);
    }
  };

  const handleClick = (item: any) => {
    setServiceEdit(item);
    history.push(`/dashboard/novo-servico`);
  };

  useEffect(() => {
    allServices();
  }, []);

  return (
    <div>
      <Title title="Serviços" className="font-semibold text-[32px]" />

      <div className="flex gap-8 overflow-x-auto whitespace-nowrap w-full scroll-smooth scroll-snap-x">
        {services && services?.length > 0 ? (
          services.map((item: any, index) => (
            <div
              key={index}
              className="relative w-[275px] h-[367px] mt-3.5 rounded-[28px] overflow-hidden shrink-0 scroll-snap-start text-white bg-cover bg-center"
              style={{
                backgroundImage: `url(${item?.image})`,
              }}
            >
              {/* Gradiente azul por cima */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1943DC] via-[#1943dc52] to-transparent" />

              {/* Conteúdo */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <div className="w-full flex justify-between items-center">
                  <Title title={item?.serviceName} className="font-semibold text-[#EFF5FF]" />
                  <button
                    className="w-13 h-13 rounded-full bg-[#BED8FF]  flex items-center justify-center hover:shadow-[inset_0px_0px_5px_#1943DC] transition duration-300 ease-in-out"
                    type="button"
                    onClick={() => handleClick(item)}
                  >
                    <IoMdArrowForward className="text-[#1943DC] w-6 h-6 " />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=" flex w-full h-[267px] items-center justify-center ">
            Não foi encontrado nenhum serviço
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceContainers;
