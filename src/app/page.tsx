/* eslint-disable max-lines-per-function */
import Image from 'next/image';
import Title from '../components/Title';
import { poppins } from '../utils/fonts';

// Este componente renderiza a página inicial da aplicação.
export default function Home() {
  return (
    <main>

      <Title />

      {/* Services */}
      <div className='custom-cont-div-services'>
        {/* Service - Build Community */}
        <div className='custom-div-community'>

          <Image
            src='/images/iconBuild.svg'
            alt='image icon build community'
            width={64}
            height={64}
            className='rounded-[16px]'
          />

          <p className={`${poppins.className} custom-p-community`}>
            Build Community
          </p>

        </div>
        {/* Service - Share Events */}
        <div className='custom-cont-div-img-share'>
          <Image
            src='/images/iconCalendar.svg'
            alt='image icon build community'
            width={64}
            height={64}
            className='rounded-[16px]'
          />
          <p className={`${poppins.className} custom-p-share`}>
            Share Events
          </p>
        </div>
        {/* Service - Get information */}
        <div className='custom-cont-div-info'>
          <Image
            src='/images/iconInfo.svg'
            alt='image icon build community'
            width={64}
            height={64}
            className='flex-none order-none flex-grow-0'
          />
          <p className={`${poppins.className} custom-p-info`}>
            Get Information
          </p>
        </div>
      </div>
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
