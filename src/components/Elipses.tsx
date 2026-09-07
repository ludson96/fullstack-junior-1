// Este componente renderiza duas elipses decorativas responsivas.
export default function Elipses() {
  return (
    <div className='relative w-full h-full min-h-[500px] overflow-hidden pointer-events-none opacity-30'>
      {/* Elipse média */}
      <div className='absolute right-[-10%] top-[20%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full border border-[#E1E1E1] -z-10' />

      {/* Elipse grande */}
      <div className='absolute right-[-20%] top-[-5%] w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full border border-[#E1E1E1] -z-10' />
    </div>
  );
}
