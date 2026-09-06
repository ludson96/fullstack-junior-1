'use client';

import { useState, useEffect, useCallback } from 'react';
import { Job, JobApplicationPayload } from '../types/job';
import { fetchJobs, submitJobApplication } from '../services/jobService';
import { useApplicationModal } from './useApplicationModal';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>('Todos');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const modal = useApplicationModal();

  const loadJobs = useCallback(async (level: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJobs(level);
      setJobs(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erro ao carregar vagas.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs(selectedLevel);
  }, [selectedLevel, loadJobs]);

  const handleSendApplication = async (payload: JobApplicationPayload) => {
    modal.setIsSubmitting(true);
    modal.setSubmitErrorMessage(null);
    try {
      const res = await submitJobApplication(payload);
      modal.setSubmitSuccessMessage(res.message);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao enviar candidatura.';
      modal.setSubmitErrorMessage(msg);
    } finally {
      modal.setIsSubmitting(false);
    }
  };

  return {
    jobs,
    selectedLevel,
    setSelectedLevel,
    loading,
    error,
    selectedJob: modal.selectedJob,
    isSubmitting: modal.isSubmitting,
    submitSuccessMessage: modal.submitSuccessMessage,
    submitErrorMessage: modal.submitErrorMessage,
    handleApply: modal.openModal,
    handleCloseModal: modal.closeModal,
    handleSendApplication,
    reloadJobs: () => loadJobs(selectedLevel),
  };
}
