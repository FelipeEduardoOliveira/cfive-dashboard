import React from 'react';
import Paragraph from '../Texts/paragraph';

const Tag = ({
  tag,
  style,
}: {
  tag: string;
  style: 'PUBLISH' | 'SCHEDULED' | 'INACTIVE' | string;
}) => {
  const tagBackgroundColor =
    {
      PUBLISH: 'bg-[#B2FFB2]',
      INACTIVE: 'bg-[#FFB2B2]',
      SCHEDULED: 'bg-[#FFE5B2]',
    }[style] || 'bg-[#BED8FF]'; // Default color if tag not found

  return (
    <div
      className={`flex items-center justify-center shadow-lg rounded-md py-1 px-2 shrink-0 gap-4
        ${tagBackgroundColor}`}
    >
      <Paragraph title={tag} className="text-[#162155] font-mono text-[11px]" />
    </div>
  );
};

export default Tag;
