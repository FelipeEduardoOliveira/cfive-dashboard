import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function Title({ className, title, ...rest }: TitleProps) {
  return (
    <h1 className={className} {...rest}>
      {title}
    </h1>
  );
}
