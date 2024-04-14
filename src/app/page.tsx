import Title from '../components/Title';
import Services from '../components/Services';
import PersonImage from '../components/PersonImage';
import Elipses from '../components/Elipses';

// Este componente renderiza a página inicial da aplicação.
export default function Home() {
  return (
    <main>
      {/* Título */}
      <Title />

      {/* Services */}
      <Services />

        {/* Content */}
        <div>
        {/* Imagens de pessoas */}
        <PersonImage />
        {/* Elipse */}
        <Elipses />
      </div>
    </main>
  );
}
