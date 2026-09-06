'use client';

import React from 'react';
import { Job } from '../../types/job';
import JobCard from './JobCard';

interface JobGridProps {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  onApply: (job: Job) => void;
  onRetry: () => void;
}

export default function JobGrid({
  jobs,
  loading,
  error,
  onApply,
  onRetry,
}: JobGridProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3">
        <div className="w-8 h-8 border-3 border-[#DB2A6B] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Carregando oportunidades...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-center max-w-md mx-auto">
        <p className="text-red-400 text-sm font-medium mb-3">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        Nenhuma vaga encontrada para este nível no momento.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  );
}
