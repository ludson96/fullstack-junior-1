'use client';

import { useState } from 'react';
import { Job } from '../types/job';

export function useApplicationModal() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState<string | null>(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setSubmitSuccessMessage(null);
    setSubmitErrorMessage(null);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setSubmitSuccessMessage(null);
    setSubmitErrorMessage(null);
  };

  return {
    selectedJob,
    isSubmitting,
    setIsSubmitting,
    submitSuccessMessage,
    setSubmitSuccessMessage,
    submitErrorMessage,
    setSubmitErrorMessage,
    openModal,
    closeModal,
  };
}
