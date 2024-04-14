import Image from 'next/image';

export default function ServiceGet() {
  return (
    <div className='custom-cont-div-info'>

      <Image
        src='/images/iconInfo.svg'
        alt='image icon build community'
        width={64}
        height={64}
        className='flex-none order-none flex-grow-0'
      />

      <p className={'custom-p-info'}>
        Get Information
      </p>

  </div>
  );
}
