import type { Metadata } from 'next';
import './globals.css';
import Head from '../components/Head';
import { poppins } from '../utils/fonts';

export const metadata: Metadata = {
  title: 'Naranja Labs Challenge',
  description: 'Challenge project for Naranja Labs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Head />
        {children}
      </body>
    </html>
  );
}
