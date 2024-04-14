import MainTitle from './MainTitle';
import Subtitle from './Subtitle';
import Button from './Button';
import LearnMore from './LearnMore';

// Este componente renderiza o título, paragrafo, botoes de inicio e saiba mais.
export default function Title() {
  return (
    <>
      {/* Título principal */}
      <MainTitle />

      {/* Paragrafo abaixo do título  */}
      <Subtitle />

      <div className='custom-div-cont-group1'>
        {/* Botão 'Get Started' */}
        <Button />

        {/* Texto 'Learn More' e seta */}
        <LearnMore />
      </div>
    </>
  );
}
