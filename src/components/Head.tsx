import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import { merriweather } from '../utils/fonts';

// Este componente renderiza o cabeçalho da aplicação de forma responsiva.
export default function Head() {
  return (
    <header className='w-full max-w-[1920px] mx-auto h-[120px] px-6 sm:px-12 lg:px-20 flex items-center justify-between relative z-30'>
      {/* Título no cabeçalho com link para home */}
      <Link href="/" className={`${merriweather.className} text-[32px] sm:text-[36px] font-bold text-red-500`}>
        Gath<span className="text-[#FFFFFF]">Session</span>.
      </Link>

      {/* Menu interativo no cabeçalho */}
      <div className="flex items-center gap-8">
        <Menu />

        {/* Botão de menu no cabeçalho */}
        <div className='cursor-pointer'>
          <Image
            src='/images/menu.svg'
            alt='menu'
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
}
