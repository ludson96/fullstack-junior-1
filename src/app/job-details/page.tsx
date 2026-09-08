'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { fetchJobById } from '../../services/jobService';
import { Job } from '../../types/job';
import Badge from '../../components/ui/Badge';

export default function JobDetailPage() {
  const [jobId, setJobId] = useState('1');
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobId) return;

    setLoading(true);
    setError(null);
    try {
      const data = await fetchJobById(Number(jobId));
      setJob(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Vaga não encontrada');
      setJob(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2B2D38] text-white pt-10 pb-20 px-4">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          ← Voltar para a Página Inicial
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-[#3B3E4C] text-[#E2E8F0] mb-3">
            Endpoint: GET /api/job/[id]
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Consultar Vaga por ID
          </h1>
          <p className="mt-2 text-gray-400">
            Consulte os detalhes de qualquer oportunidade fornecendo o identificador numérico da vaga.
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <input
            type="number"
            min="1"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            placeholder="Digite o ID da vaga (ex: 1, 2, 3, 4)"
            className="flex-1 bg-[#20222B] border border-[#333644] rounded-2xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#DB2A6B]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-[#DB2A6B] hover:bg-[#b81d54] text-white font-semibold rounded-2xl transition-all disabled:opacity-50"
          >
            {loading ? 'Consultando...' : 'Consultar'}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-[#7F1D1D] text-white font-medium rounded-2xl mb-8">
            {error}
          </div>
        )}

        {job && (
          <div className="p-8 rounded-3xl bg-[#22242D] border border-[#333644]">
            <div className="flex items-center justify-between gap-4 mb-4">
              <Badge variant={job.level.toLowerCase() === 'junior' ? 'junior' : 'senior'}>
                {job.level}
              </Badge>
              <Badge variant={job.status.toLowerCase() === 'open' ? 'open' : 'closed'}>
                {job.status === 'open' ? 'Disponível' : 'Encerrada'}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{job.job}</h2>
            <p className="text-sm text-gray-400 mb-6">
              Identificador da vaga: #{job.id} • API /api/job/{job.id}
            </p>
            <Link
              href="/jobs"
              className="inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#DB2A6B] text-white hover:bg-[#b81d54] transition-colors"
            >
              Ver todas as vagas
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
