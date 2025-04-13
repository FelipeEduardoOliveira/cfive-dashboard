import React from 'react';

interface ParagraphProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function Paragraph({ className, title, ...rest }: ParagraphProps) {
  return (
    <p className={className} {...rest}>
      {title}
    </p>
  );
}
