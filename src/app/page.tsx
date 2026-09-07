import Title from '../components/Title';
import Services from '../components/Services';
import PersonImage from '../components/PersonImage';
import Elipses from '../components/Elipses';

// Este componente renderiza a página inicial com Hero Section moderna, totalmente responsiva e fluida.
export default function Home() {
  return (
    <main className='relative w-full min-h-[calc(100vh-120px)] flex flex-col justify-center overflow-hidden'>
      {/* Background Decorativo com Elipses circulares sutis */}
      <div className='absolute right-0 top-0 w-full lg:w-2/3 h-full pointer-events-none -z-10 overflow-hidden'>
        <Elipses />
      </div>

      {/* Hero Section Container Responsivo */}
      <div className='w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-20 py-4 lg:py-8 flex-1 flex flex-col justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Coluna Esquerda: Textos, Ações e Serviços */}
          <div className='lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-10 space-y-12'>
            {/* Título e Botões de Ação */}
            <Title />

            {/* Tags / Serviços em destaque */}
            <Services />
          </div>

          {/* Coluna Direita: Mosaico de Pessoas Figma */}
          <div className='lg:col-span-6 xl:col-span-6 relative w-full flex justify-center lg:justify-end items-center'>
            <PersonImage />
          </div>
        </div>
      </div>
    </main>
  );
}
