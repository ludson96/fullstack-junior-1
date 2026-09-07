'use client';

import { useRouter } from 'next/navigation';

// Este componente renderiza o botão 'Get Started' da página inicial.
export default function Button() {
  const router = useRouter();

  const handleGoToJobs = () => {
    router.push('/jobs');
  };

  return (
    <button
      type='button'
      onClick={handleGoToJobs}
      className='w-[200px] sm:w-[220px] h-[56px] bg-[#DB2A6B] text-white font-medium text-lg rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] flex items-center justify-center cursor-pointer hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#DB2A6B]/25 transition-all duration-300 active:scale-95'
    >
      Get Started
    </button>
  );
}
