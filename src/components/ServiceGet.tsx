import Image from 'next/image';

export default function ServiceGet() {
  return (
    <div className='flex items-center gap-4 group cursor-default'>
      <div className='w-16 h-16 flex-shrink-0 transition-transform group-hover:scale-105'>
        <Image
          src='/images/iconInfo.svg'
          alt='image icon get information'
          width={64}
          height={64}
          className='w-16 h-16 object-contain'
        />
      </div>

      <p className='text-base font-semibold text-white max-w-[110px] leading-snug'>
        Get Information
      </p>
    </div>
  );
}
