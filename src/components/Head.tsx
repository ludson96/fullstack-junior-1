import Image from 'next/image';
import Menu from './Menu';
import { merriweather } from '../utils/fonts';

// Este componente renderiza o cabeçalho da aplicação.
export default function Head() {
  return (
    <header className='custom-header'>

      {/* Título no cabeçalho */}
      <div className={`${merriweather.className} custom-head-cont-div-title`}>
        <p className='custom-head-p-title'>
          Gath
        <span className="text-[#FFFFFF]">Session</span>
        .
        </p>
      </div>

      {/* Menu interativo no cabeçalho */}
      <Menu />

      {/* Botão de menu no cabeçalho */}
      <div className='custom-head-cont-div-img-menu'>
        <Image
          src='/images/menu.svg'
          alt='menu'
          width={24}
          height={24}
          />
      </div>
    </header>
  );
}
