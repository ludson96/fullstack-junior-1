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
      <body className={'bg-[#2B2D38]'}>
        <Head />
        {children}
      </body>
    </html>
  );
}
