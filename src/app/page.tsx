import Title from '../components/Title';
import Services from '../components/Services';
import PersonImage from '../components/PersonImage';
import Elipses from '../components/Elipses';
import JobList from '../components/jobs/JobList';

// Este componente renderiza a página inicial da aplicação com a Hero e a seção de Vagas.
export default function Home() {
  return (
    <main className='relative overflow-x-hidden min-h-screen'>
      {/* Hero Section Container (Pixel Perfect com dimensões do Figma) */}
      <div className='relative w-[1920px] h-[960px]'>
        {/* Título e Botões de Ação */}
        <Title />

        {/* Services */}
        <Services />

        {/* Content & Background Visuals */}
        <div>
          {/* Imagens de pessoas */}
          <PersonImage />
          {/* Elipses decorativas */}
          <Elipses />
        </div>
      </div>

      {/* Seção Dinâmica de Oportunidades & Vagas */}
      <div className='w-full bg-[#23252e] border-t border-white/5'>
        <JobList />
      </div>
    </main>
  );
}
