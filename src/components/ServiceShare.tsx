import Image from 'next/image';

// Este componente renderiza o service de Share Events.
export default function ServiceShare() {
  return (
    <div className='custom-cont-div-img-share'>

      <Image
        src='/images/iconCalendar.svg'
        alt='image icon build community'
        width={64}
        height={64}
        className='rounded-[16px]'
      />

      <p className={'custom-p-share'}>
        Share Events
      </p>

  </div>
  );
}
