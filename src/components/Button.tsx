import { poppins } from '../utils/fonts';

// Este componente renderiza o botão 'Get Started' da página inicial.
export default function Button() {
  return (
    <div className='custom-div-btn'>
      <button className='custom-btn'>
        <p className={`${poppins.className} custom-p-started`}>
          Get Started
        </p>
      </button>
    </div>
  );
}
