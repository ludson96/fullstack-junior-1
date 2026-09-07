import MainTitle from './MainTitle';
import Subtitle from './Subtitle';
import Button from './Button';
import LearnMore from './LearnMore';

// Este componente renderiza o título, paragrafo, botoes de inicio e saiba mais.
export default function Title() {
  return (
    <div className='flex flex-col space-y-6'>
      {/* Título principal */}
      <MainTitle />

      {/* Paragrafo abaixo do título */}
      <Subtitle />

      {/* Botões de ação alinhados flexivelmente */}
      <div className='flex flex-wrap items-center gap-6 pt-2'>
        <Button />
        <LearnMore />
      </div>
    </div>
  );
}
