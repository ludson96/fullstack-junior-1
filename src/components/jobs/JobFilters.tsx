import React from 'react';

interface JobFiltersProps {
  currentLevel: string;
  onSelectLevel: (level: string) => void;
}

const LEVELS = ['Todos', 'Junior', 'Senior'];

const activeClass = 'bg-[#DB2A6B] text-white shadow-lg shadow-[#DB2A6B]/30 scale-105';
const inactiveClass = 'bg-white/5 text-gray-400 hover:bg-white/10'
  + ' hover:text-white border border-white/5';

export default function JobFilters({ currentLevel, onSelectLevel }: JobFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {LEVELS.map((level) => {
        const isActive = currentLevel === level;
        const style = isActive ? activeClass : inactiveClass;
        return (
          <button
            key={level}
            type="button"
            onClick={() => onSelectLevel(level)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${style}`}
          >
            {level === 'Todos' ? 'Todas as Vagas' : `Nível ${level}`}
          </button>
        );
      })}
    </div>
  );
}
