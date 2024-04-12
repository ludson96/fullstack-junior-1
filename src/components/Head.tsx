import { Merriweather } from 'next/font/google';
import NavBar from './NavBar';

const merriweather = Merriweather({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
});

export default function Head() {
  return (
    <header className='w-[1920px] h-[120px] rounded-r-lg'>
      <div className=
      {`absolute ${merriweather.className} w-[235px] h-[45px] top-[37px] left-[160px] gap-0`
      }>
        <p className='text-red-500 font-bold text-[36px] leading-[45.25px] text-left'>
          Gath
        <span className="text-[#FFFFFF]">Session</span>
        .
        </p>
      </div>

      <NavBar />

    </header>
  );
}
