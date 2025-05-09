import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function Title({ className, title, ...rest }: TitleProps) {
  return (
    <h1 className={` text-[#162155] text-3xl ${className}`} {...rest}>
      {title}
    </h1>
  );
}
