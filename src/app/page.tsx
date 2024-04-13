/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { Merriweather, Poppins } from 'next/font/google';
import Image from 'next/image';

const merriweather = Merriweather({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
});

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600', '700', '900'],
});

export default function Home() {
  return (
    <main>
      <div className= 'absolute w-[784px] h-[303px] top-[216px] left-[160px]' >
      <h1 className={`${merriweather.className}
       text-[80px] font-bold leading-[100.56px] left-white`}>
      Build your best community starting from here.
      </h1>
      </div>

      <div className='absolute w-[648px] h-[120px] top-[543px] left-[160px] opacity-50'>
        <p
        className={
          `${poppins.className} text-[24px] font-normal leading-[40px] left-white`
          }>
        Meet and communicate with the best people to run projects, events or other
        activities in a more effective and fun way
        </p>
      </div>

      <div className='w-[420px] custom-position-group1 custom-rounded'>
        <div className='w-[240px] custom-position-group1 custom-rounded'>
          <div
          className='absolute
           w-[240px] h-[60px] top-[695px] left-[160px] custom-rounded bg-[#DB2A6B] center-text'
          >
          <p className={
            `${poppins.className}
            h27-t18-l27 font-normal left-white w-[103px] `
            }>
            Get Started
          </p>
          </div>

        </div>

        <div
        className=
        'absolute w-[148px] h-[40px] top-[705px] left-[432px] flex items-center justify-between'
        >

          <p
          className={
            `h-[27px]
             ${poppins.className} text-[18px] font-semibold leading-[27px] left-white underline`
          }>
          Learn More
          </p>
          <Image
            src='/images/arrow.svg'
            alt='image arrow'
            width={40}
            height={40}
            className='mt-1'
          />

        </div>

      </div>

      <div className='flex absolute w-[616px]  h-[64px] top-[899px] left-[160px] gap-[48px]'>
        <div className='w-[190px] h-[64px] gap-[16px] flex items-center'>
          <Image
            src='/images/iconBuild.svg'
            alt='image icon build community'
            width={64}
            height={64}
            className='rounded-[16px]'
          />
          <p
            className={
              `w-[110px] h-[54px]
               ${poppins.className} text-[18px] font-semibold leading-[27px] left-white`
            }>
            Build Community
          </p>
        </div>

        <div className='w-(141px) h-[64px] gap-[16px] flex items-center'>
          <Image
            src='/images/iconCalendar.svg'
            alt='image icon build community'
            width={64}
            height={64}
            className='rounded-[16px]'
          />
          <p
            className={
              `w-[110px] h-[54px]
               ${poppins.className} text-[18px] font-semibold leading-[27px] left-white`
            }>
            Share Events
          </p>
        </div>

        <div className='w-[189px] h-[64px] gap-[16px] flex flex-row items-center p-0'>
          <Image
            src='/images/iconInfo.svg'
            alt='image icon build community'
            width={64}
            height={64}
            className='flex-none order-none flex-grow-0'
          />
          <p
            className={
              `w-[109px] h-[54px]
               ${poppins.className} text-[18px] font-semibold leading-[27px] left-white`
            }>
            Get Information
          </p>
        </div>
      </div>

        <Image
          src='/images/personBlue.svg'
          alt='image person background blue'
          width={240}
          height={240}
          className='absolute w-[240px] h-[240px] top-[174px] left-[1248px]'
        />

        <Image
          src='/images/personPurple.svg'
          alt='image person background blue'
          width={240}
          height={509}
          className='absolute w-[240px] h-[509px] top-[174px] left-[976px]'
        />

        <Image
          src='/images/personPink.svg'
          alt='image person background blue'
          width={240}
          height={240}
          className='absolute w-[240px] h-[240px] top-[715px] left-[976px]'
        />

        <Image
          src='/images/personOrange.svg'
          alt='image person background blue'
          width={240}
          height={509}
          className='absolute w-[240px] h-[509px] top-[446px] left-[1248px]'
        />

        <Image
          src='/images/personYellow.svg'
          alt='image person background blue'
          width={240}
          height={509}
          className='absolute w-[240px] h-[509px] top-[310px] left-[1520px]'
        />

      <div className='absolute w-[949px] h-[906px] top-[174px] left-[971px] overflow-hidden'>

        <div className='absolute w-[850px] h-[850px] left-[246px] top-[366px] -z-10 opacity-25'>
          <div className='w-full h-full border border-solid border-[#E1E1E1] rounded-full'></div>
        </div>

        <div className='absolute w-[1102px] h-[1102px] left-[0px] top-[89px] -z-10 opacity-25'>
          <div className='w-full h-full border border-solid border-[#E1E1E1] rounded-full'></div>
        </div>

      </div>

    </main>
  );
}
