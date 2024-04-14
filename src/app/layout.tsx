import type { Metadata } from 'next';
import './globals.css';
import Head from '../components/Head';

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
      <body>
        <Head />
        {children}
      </body>
    </html>
  );
}
