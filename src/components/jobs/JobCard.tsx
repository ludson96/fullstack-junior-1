import React from 'react';
import { Job } from '../../types/job';
import Badge from '../ui/Badge';

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

const cardContainerClass = 'group relative flex flex-col justify-between p-6 rounded-2xl'
  + ' bg-[#22242D] border border-[#333644] hover:border-[#4B5563]'
  + ' transition-colors duration-200';

const btnActiveClass = 'bg-[#DB2A6B] hover:bg-[#b81d54] text-white active:scale-95';

export default function JobCard({ job, onApply }: JobCardProps) {
  const isOpen = job.status.toLowerCase() === 'open';
  const badgeVariant = job.level.toLowerCase() === 'junior' ? 'junior' : 'senior';
  const btnClass = isOpen ? btnActiveClass : 'bg-white/5 text-gray-500 cursor-not-allowed';

  return (
    <div className={cardContainerClass}>
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge variant={badgeVariant}>
            {job.level}
          </Badge>
          <Badge variant={isOpen ? 'open' : 'closed'}>
            {isOpen ? 'Disponível' : 'Encerrada'}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-[#FF5B99] transition-colors">
          {job.job}
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          Identificador da vaga: #{job.id} • Remoto / Híbrido
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-mono">
          Naranja Labs Careers
        </span>
        <button
          type="button"
          disabled={!isOpen}
          onClick={() => onApply(job)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${btnClass}`}
        >
          {isOpen ? 'Candidatar-se' : 'Encerrada'}
        </button>
      </div>
    </div>
  );
}
