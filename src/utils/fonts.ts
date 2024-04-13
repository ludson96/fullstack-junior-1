import { Merriweather, Poppins } from 'next/font/google';

export const merriweather = Merriweather({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
});

export const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600', '700', '900'],
});
