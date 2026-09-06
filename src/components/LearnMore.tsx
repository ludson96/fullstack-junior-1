import Link from 'next/link';
import Image from 'next/image';

// Este componente renderiza o link 'Learn More' da página inicial.
export default function LearnMore() {
  return (
    <Link className='custom-link group' href='#jobs-section'>

      <p className={'custom-p-learn group-hover:text-[#DB2A6B] transition-colors'}>
        Learn More
      </p>

      <Image
        src='/images/arrow.svg'
        alt='image arrow'
        width={40}
        height={40}
        className='mt-1 transition-transform group-hover:translate-x-1'
      />

    </Link>
  );
}
