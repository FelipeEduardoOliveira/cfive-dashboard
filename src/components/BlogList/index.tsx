import React from 'react';
import LogoCfive from '@/../public/Imagens/newLogo.jpg';
import minText from '@/utils/minText';
import Paragraph from '../Texts/paragraph';
import Tag from '../Tag';

const BlogList = () => {
  return (
    <div className="w-full h-28 flex items-center bg-[#EFF5FF] shadow-lg rounded-md px-3 py-4 gap-4">
      {/* Logo com largura fixa, sem encolher */}
      <div
        className="w-20 h-[72px] bg-amber-300 rounded-md flex-shrink-0 flex items-center justify-center"
        style={{
          backgroundImage: `url(${LogoCfive.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Container de conteúdo com overflow escondido e largura máxima */}
      <div className="flex flex-col items-start justify-start gap-2 flex-1 min-w-0">
        <Paragraph
          title={minText(
            'Meu nome é Felipe Eduardo Rodrigues de Oliveira. Desenvolvedor na Caixa Economica Federal'
          )}
          className="font-medium text-base leading-6"
        />

        {/* Scroll horizontal de tags sem quebrar layout */}
        <div className="flex items-center gap-2 overflow-x-auto w-full scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
          <Tag tag="Empresas" />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
