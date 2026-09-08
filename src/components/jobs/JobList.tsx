'use client';

import React from 'react';
import { useJobs } from '../../hooks/useJobs';
import JobFilters from './JobFilters';
import JobGrid from './JobGrid';
import JobModal from './JobModal';

export default function JobList() {
  const {
    jobs,
    selectedLevel,
    setSelectedLevel,
    loading,
    error,
    selectedJob,
    isSubmitting,
    submitSuccessMessage,
    submitErrorMessage,
    handleApply,
    handleCloseModal,
    handleSendApplication,
    reloadJobs,
  } = useJobs();

  return (
    <section id="jobs-section" className="relative z-20 max-w-6xl mx-auto px-6 py-24 scroll-mt-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Faça parte da nossa equipe
        </h2>
        <p className="mt-3 text-base text-gray-400">
          Descubra posições abertas na Naranja Labs e candidate-se diretamente.
        </p>
      </div>

      <div className="mb-10">
        <JobFilters currentLevel={selectedLevel} onSelectLevel={setSelectedLevel} />
      </div>

      <JobGrid
        jobs={jobs}
        loading={loading}
        error={error}
        onApply={handleApply}
        onRetry={reloadJobs}
      />

      <JobModal
        job={selectedJob}
        isOpen={Boolean(selectedJob)}
        onClose={handleCloseModal}
        onSubmit={handleSendApplication}
        isSubmitting={isSubmitting}
        successMessage={submitSuccessMessage}
        errorMessage={submitErrorMessage}
      />
    </section>
  );
}
