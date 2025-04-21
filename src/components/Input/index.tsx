import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type InputProps = TextFieldProps & {
  title: string;
  touched?: boolean;
  helperText?: string;
};

export default function Input({
  onChange,
  placeholder = '',
  title = 'teste',
  variant = 'standard',
  helperText,
  touched,
  ...rest
}: InputProps) {
  return (
    <TextField
      id="standard-basic"
      label={title}
      variant={variant}
      placeholder={placeholder}
      error={!!helperText && touched}
      helperText={touched && helperText ? helperText : ''}
      onChange={onChange}
      className={`w-full ${rest.className}`}
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
          color: '#162155',
          fontWeight: 900,
        },
      }}
      sx={{
        '& input:-webkit-autofill': {
          boxShadow: '0 0 0 1000px #f0f4ff0 inset', // Cor de fundo personalizada
          WebkitTextFillColor: '#162155', // Cor do texto
          transition: 'background-color 5000s ease-in-out 0s',
        },
      }}
    />
  );
}
