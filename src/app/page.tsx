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
    <main
    className="width-[784px]
     height-[539px] top-[216px] left-[160px] custom-rounded"
    >
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
            />

        </div>

      </div>

      <div className='flex absolute w-[616px]  h-[64px] top-[899px] left-[160px] gap-[48px]'>
        <div className='w-[190px] h-[64px] gap-[16px] flex items-centerq'>
          <Image
            src='/images/icon-build.svg'
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

        <div className='w-[190px] h-[64px] gap-[16px] flex items-centerq'>
          <Image
            src='/images/icon-calendar.svg'
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

        <div className='w-[190px] h-[64px] gap-[16px] flex items-centerq'>
          <Image
            src='/images/icon-info.svg'
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

      </div>

    </main>
  );
}
