'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import navigationData from '@/data/navigationData';
import { poppins } from '../utils/fonts';

// Este componente renderiza o menu de navegação da aplicação.
export default function Menu() {
  const pathName = usePathname() || '/';

  const [, setHoverLink] = useState(pathName);
  return (
    <nav className={`${poppins.className} custom-nav`}>
      {navigationData.map((data) => {
        const isActive = data.path === pathName;
        // Se a rota atual for a mesma que a rota do link, a cor do texto é branco, caso contrário, é cinza.
        const isSelect = isActive ? 'text-[#FFFFFF]' : 'text-[#ABABAB]';

        return (
          <Link
          key={data.id}
          href={data.path}
          className={`custom-nav-link hover-underline-animation ${isSelect}`}
          // Quando o mouse passa por cima do link, realiza a animação de underline.
          onMouseOver={() => setHoverLink(data.path)}
          // Quando o mouse sai de cima do link, a animação se move para a direita.
          onMouseLeave={() => setHoverLink(pathName)}
          >
            {data.name}
          </Link>
        );
      })}
    </nav>
  );
}
