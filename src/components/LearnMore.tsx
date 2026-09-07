import Link from 'next/link';
import Image from 'next/image';

// Este componente renderiza o link 'Learn More' da página inicial.
export default function LearnMore() {
  return (
    <Link
      className='flex items-center gap-2 group text-white font-semibold text-lg hover:text-[#DB2A6B] transition-colors py-2'
      href='/jobs'
    >
      <span className='underline underline-offset-4'>
        Learn More
      </span>

      <Image
        src='/images/arrow.svg'
        alt='image arrow'
        width={32}
        height={32}
        className='transition-transform group-hover:translate-x-1.5'
      />
    </Link>
  );
}
