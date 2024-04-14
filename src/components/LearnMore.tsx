import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '../utils/fonts';

// Este componente renderiza o link 'Learn More' da página inicial.
export default function LearnMore() {
  return (
    <Link className='custom-link' href='/'>

      <p className={`${poppins.className} custom-p-learn`}>
        Learn More
      </p>

      <Image
        src='/images/arrow.svg'
        alt='image arrow'
        width={40}
        height={40}
        className='mt-1'
      />

    </Link>
  );
}
