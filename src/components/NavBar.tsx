import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
});

export default function NavBar() {
  return (
    <nav className='w-[1920px] h-[120px] gap-0 rounded-r-lg'>

    </nav>
  );
}
