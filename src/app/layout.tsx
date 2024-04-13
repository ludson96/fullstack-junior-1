import type { Metadata } from 'next';
import './globals.css';
import Head from '../components/Head';

export const metadata: Metadata = {
  title: 'Desafio Naranja Labs',
  description: 'Projeto de desafio para a Naranja Labs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'relative w-[1920px] h-[1080px] bg-[#2B2D38]'}>
        <Head />
        {children}
      </body>
    </html>
  );
}
