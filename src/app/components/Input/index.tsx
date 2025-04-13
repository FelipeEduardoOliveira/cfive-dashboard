import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type InputProps = TextFieldProps & {
  title: string;
};

export default function Input({
  onChange,
  placeholder = 'tste',
  title = 'teste',
  variant = 'standard',
  ...rest
}: InputProps) {
  return (
    <TextField
      id="standard-basic"
      label={title}
      variant={variant}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
      InputProps={{
        style: {
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 400,
          color: '#162155', // cor do texto digitado
        },
      }}
      InputLabelProps={{
        style: {
          fontFamily: 'var(--font-montserrat), sans-serif', // Fonte para o rótulo (label)
          color: '#1B38B2',
          fontWeight: 900,
        },
      }}
    />
  );
}
