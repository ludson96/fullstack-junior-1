import type { Metadata } from 'next';
import Link from 'next/link';
import JobList from '../../components/jobs/JobList';

export const metadata: Metadata = {
  title: 'Vagas & Carreiras | Naranja Labs',
  description: 'Confira as oportunidades abertas e candidate-se para o time da Naranja Labs.',
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#2B2D38] text-white pt-10 pb-20 px-4">
      {/* Barra de retorno para Home */}
      <div className="max-w-6xl mx-auto mb-6 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Voltar para a Página Inicial
        </Link>
      </div>

      {/* Seção Completa de Vagas com Filtros e Modal */}
      <JobList />
    </div>
  );
}
