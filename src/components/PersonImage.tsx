import Image from 'next/image';

// Este componente renderiza imagens de pessoas em posição absoluta.
export default function PersonImage() {
  return (
    <>
      <Image
        src='/images/personBlue.svg'
        alt='image person background blue'
        width={240}
        height={240}
        className='custom-img-pblue'
      />

      <Image
        src='/images/personPurple.svg'
        alt='image person background blue'
        width={240}
        height={509}
        className='custom-img-ppurple'
      />

      <Image
        src='/images/personPink.svg'
        alt='image person background blue'
        width={240}
        height={240}
        className='custom-img-ppink'
      />

      <Image
        src='/images/personOrange.svg'
        alt='image person background blue'
        width={240}
        height={509}
        className='custom-img-porange'
      />

      <Image
        src='/images/personYellow.svg'
        alt='image person background blue'
        width={240}
        height={509}
        className='custom-img-yellow'
      />
    </>
  );
}
