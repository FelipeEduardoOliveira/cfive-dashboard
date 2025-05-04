import React from 'react';
import LogoCfive from '@/../public/Imagens/newLogo.jpg';
import minText from '@/utils/minText';
import Paragraph from '../Texts/paragraph';
import Tag from '../Tag';
import { Timestamp } from 'firebase/firestore';
import { formatFromFirebaseTimestamp } from '@/utils/formatToFirebaseTimestamp';
import { useEdit } from '@/context/EditContext';

interface BlogListProps {
  id: string;
  title: string;
  image: string;
  active: boolean;
  publicIn: Timestamp;
  onClick: () => void;
}

const BlogList = ({ title, image, active, publicIn, onClick }: BlogListProps) => {
  const publicated = formatFromFirebaseTimestamp(publicIn);

  return (
    <div
      className="w-full h-28 flex items-center bg-[#EFF5FF] shadow-lg rounded-md px-3 py-4 gap-4"
      onClick={onClick}
    >
      <div
        className="w-20 h-[72px]  rounded-md flex-shrink-0 flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Container de conteúdo com overflow escondido e largura máxima */}
      <div className="flex flex-col items-start justify-start gap-2 flex-1 min-w-0">
        <Paragraph title={minText(title)} className="font-medium text-base leading-6" />

        {/* Scroll horizontal de tags sem quebrar layout */}
        <div className="flex items-center gap-2 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
          {publicated.getTime() <= Date.now() && active === true && (
            <Tag tag="Publicado" style="PUBLISH" />
          )}
          {active === false && <Tag tag="Desativado" style="INACTIVE" />}
          {publicated.getTime() > Date.now() && (
            <Tag
              tag={`Agendado para o dia: ${publicated.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}`}
              style="SCHEDULED"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
