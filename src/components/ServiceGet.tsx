import Image from 'next/image';
import { poppins } from '../utils/fonts';

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

      <p className={`${poppins.className} custom-p-info`}>
        Get Information
      </p>

  </div>
  );
}
