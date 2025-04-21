import { object, string } from 'yup';

export const loginSchema = object().shape({
  nome: string().required('O nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
  senha: string().required('A senha é obrigatória').min(6, 'Mínimo 6 caracteres'),
});
