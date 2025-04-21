import { Montserrat, Hind } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const hind = Hind({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-hind',
});
