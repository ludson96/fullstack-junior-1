import { merriweather } from '../utils/fonts';

// Este componente renderiza o título principal da página inicial.
export default function MainTitle() {
  return (
    <div className='w-full max-w-2xl'>
      <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] text-white ${merriweather.className}`}>
        Build your best community starting from here.
      </h1>
    </div>
  );
}
