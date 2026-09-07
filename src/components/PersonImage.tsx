import Image from 'next/image';

// Este componente renderiza imagens de pessoas em um layout visual moderno e responsivo.
export default function PersonImage() {
  return (
    <div className='relative w-full max-w-[720px] h-[640px] lg:h-[720px] select-none'>
      {/* Coluna 1 (Esquerda) */}
      {/* 1. Homem Touca Laranja / Fundo Roxo */}
      <div className='absolute left-0 top-0 w-[30%] h-[58%] rounded-[80px] sm:rounded-[100px] overflow-hidden shadow-2xl z-10'>
        <Image
          src='/images/personPurple.svg'
          alt='Man in orange beanie with purple background'
          fill
          sizes='(max-width: 768px) 30vw, 240px'
          className='object-cover object-top'
          priority
        />
      </div>

      {/* 2. Mulher Ruiva de Óculos / Fundo Rosa */}
      <div className='absolute left-0 bottom-0 w-[30%] h-[38%] rounded-[60px] sm:rounded-[80px] overflow-hidden shadow-2xl z-10'>
        <Image
          src='/images/personPink.svg'
          alt='Red hair woman with glasses with pink background'
          fill
          sizes='(max-width: 768px) 30vw, 240px'
          className='object-cover object-center'
        />
      </div>

      {/* Coluna 2 (Centro) */}
      {/* 3. Mulher Asiática Sorrindo / Fundo Azul Claro */}
      <div className='absolute left-[35%] top-[8%] w-[30%] h-[34%] rounded-[60px] sm:rounded-[80px] overflow-hidden shadow-2xl z-10'>
        <Image
          src='/images/personBlue.svg'
          alt='Smiling woman with blue background'
          fill
          sizes='(max-width: 768px) 30vw, 240px'
          className='object-cover object-center'
          priority
        />
      </div>

      {/* 4. Homem de Óculos e Camisa Marrom / Fundo Laranja */}
      <div className='absolute left-[35%] bottom-0 w-[30%] h-[54%] rounded-[80px] sm:rounded-[100px] overflow-hidden shadow-2xl z-10'>
        <Image
          src='/images/personOrange.svg'
          alt='Man with glasses with orange background'
          fill
          sizes='(max-width: 768px) 30vw, 240px'
          className='object-cover object-top'
        />
      </div>

      {/* Coluna 3 (Direita) */}
      {/* 5. Mulher com Toalha na Cabeça e Óculos de Sol / Fundo Amarelo */}
      <div className='absolute left-[70%] top-[20%] w-[30%] h-[58%] rounded-[80px] sm:rounded-[100px] overflow-hidden shadow-2xl z-10'>
        <Image
          src='/images/personYellow.svg'
          alt='Woman with sunglasses and towel on head with yellow background'
          fill
          sizes='(max-width: 768px) 30vw, 240px'
          className='object-cover object-top'
        />
      </div>
    </div>
  );
}
