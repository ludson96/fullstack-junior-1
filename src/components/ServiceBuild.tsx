import Image from 'next/image';

// Este componente renderiza o service de Build Community.
export default function ServiceBuild() {
  return (
    <div className='custom-div-community'>

      <Image
        src='/images/iconBuild.svg'
        alt='image icon build community'
        width={64}
        height={64}
        className='rounded-[16px]'
      />

      <p className={'custom-p-community'}>
        Build Community
      </p>

  </div>
  );
}
