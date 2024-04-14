/* eslint-disable max-lines-per-function */
import Image from 'next/image';
import Title from '../components/Title';
import Services from '../components/Services';

// Este componente renderiza a página inicial da aplicação.
export default function Home() {
  return (
    <main>
      {/* Título */}
      <Title />

      {/* Services */}
      <Services />

        {/* Content */}
        {/* Imagens de pessoas */}
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
      {/* Elipse */}
      <div className='custom-cont-div-ellipse'>

        {/* Elipse média  */}
        <div className='custom-div-medium-ellipse'>
          <div className='custom-ellipse'></div>
        </div>

        {/* Elipse grande */}
        <div className='custom-div-big-ellipse'>
          <div className='custom-ellipse'></div>
        </div>

      </div>
    </main>
  );
}
