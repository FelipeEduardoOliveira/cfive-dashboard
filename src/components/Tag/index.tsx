import React from 'react';
import Paragraph from '../Texts/paragraph';

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="flex items-center justify-center bg-[#BED8FF] shadow-lg rounded-md py-1 px-2 shrink-0 gap-4">
      <Paragraph title={tag} className="text-[#162155] font-mono text-[11px]" />
    </div>
  );
};

export default Tag;
