'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import JobFormFields from '../../components/jobs/JobFormFields';
import JobSuccessFeedback from '../../components/jobs/JobSuccessFeedback';
import { submitJobApplication } from '../../services/jobService';

const initialForm = {
  name: '',
  age: '',
  phone: '',
  state: '',
  city: '',
};

export default function SubmitApplicationPage() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await submitJobApplication({
        name: formData.name,
        age: Number(formData.age),
        phone: formData.phone,
        state: formData.state,
        city: formData.city,
      });
      setSuccessMessage(response.message);
      setFormData(initialForm);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Erro ao enviar candidatura');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#2B2D38] text-white pt-10 pb-20 px-4">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          ← Voltar para a Página Inicial
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-[#3B3E4C] text-[#E2E8F0] mb-3">
            Endpoint: POST /api/job/submit
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Envio de Candidatura
          </h1>
          <p className="mt-2 text-gray-400">
            Formulário oficial integrado diretamente à API de validação com Joi e autenticação por secret.
          </p>
        </div>

        <div className="p-8 bg-[#22242D] border border-[#333644] rounded-3xl shadow-xl">
          {successMessage ? (
            <JobSuccessFeedback
              message={successMessage}
              onClose={() => setSuccessMessage(null)}
            />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-[#7F1D1D] text-white font-medium text-sm rounded-xl">
                  {errorMessage}
                </div>
              )}
              <JobFormFields formData={formData} onChange={handleChange} />
              <div className="pt-4 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold bg-[#DB2A6B] hover:bg-[#b81d54] text-white transition-all disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? 'Enviando candidatura...' : 'Enviar Candidatura'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
