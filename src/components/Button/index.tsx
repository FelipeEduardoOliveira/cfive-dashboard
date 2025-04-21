import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { IButtonFormProps } from './interface';

export const FormButton = ({
  onClick,
  title,
  className,
  disabled,
  type = 'button',
  variant = 'contained',
  loading,
}: IButtonFormProps) => {
  return (
    <Button
      variant={variant}
      type={type}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      loadingIndicator={
        <CircularProgress
          size={24}
          sx={{ color: '#EFF5FF' }} // branco
        />
      }
      className={`bg-[#162155] w-full h-12 text-amber-50 rounded-md flex justify-center items-center gap-2 hover:bg-blue-800 transition duration-300 ease-in-out ${className} `}
      sx={{
        backgroundColor: variant === 'contained' ? '#162155' : 'transparent',
        color: '#EFF5FF',
        borderColor: variant === 'outlined' ? '#EFF5FF' : undefined,
        '&:hover': {
          backgroundColor: variant === 'contained' ? '#1E3A8A' : 'rgba(255,255,255,0.1)',
          borderColor: variant === 'outlined' ? '#AFCBFF' : undefined,
        },
      }}
    >
      <span className="text-[#EFF5FF] text-[20px]">{!loading && title}</span>
    </Button>
  );
};
