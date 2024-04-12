'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import navigationData from '@/data/navigationData';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function NavBar() {
  const pathName = usePathname() || '/';

  const [, setHoverLink] = useState(pathName);
  return (
    <nav
    className={`flex 
    absolute
     ${poppins.className} w-[519px] h-[27px] top-[46px] left-[1137px] gap-[48px]
    `}
    >
      {navigationData.map((data) => {
        const isActive = data.path === pathName;
        return (
      <Link
      key={data.id}
      href={data.path}
      className={
        `hover-underline-animation
      ${isActive ? 'text-[#FFFFFF]' : 'text-[#ABABAB]'}`
    }
      onMouseOver={() => setHoverLink(data.path)}
      onMouseLeave={() => setHoverLink(pathName)}
      >
          {data.name}
        </Link>

        );
      })}

    </nav>

  );
}
