'use client';

import React, { useState } from 'react';
import { Job, JobApplicationPayload } from '../../types/job';
import JobFormFields from './JobFormFields';
import JobSuccessFeedback from './JobSuccessFeedback';

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: JobApplicationPayload) => Promise<void>;
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
}

const initialForm = { name: '', age: '', phone: '', state: '', city: '' };

export default function JobModal({
  job,
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
  successMessage,
  errorMessage,
}: JobModalProps) {
  const [formData, setFormData] = useState(initialForm);

  if (!isOpen || !job) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      name: formData.name,
      age: Number(formData.age),
      phone: formData.phone,
      state: formData.state,
      city: formData.city,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-lg p-6 sm:p-8 bg-[#1f2029] border border-white/10 rounded-3xl shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#DB2A6B]">
              Candidatura de Emprego
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">{job.job}</h2>
            <p className="text-sm text-gray-400 mt-0.5">Nível {job.level} • Vaga #{job.id}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/5"
          >
            ✕
          </button>
        </div>

        {successMessage ? (
          <JobSuccessFeedback message={successMessage} onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {errorMessage && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
                {errorMessage}
              </div>
            )}
            <JobFormFields formData={formData} onChange={handleChange} />
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-[#DB2A6B] hover:bg-[#b81d54] text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Candidatura'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
