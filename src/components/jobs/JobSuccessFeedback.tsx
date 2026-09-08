'use client';

import React from 'react';

interface JobSuccessFeedbackProps {
  message: string;
  onClose: () => void;
}

export default function JobSuccessFeedback({
  message,
  onClose,
}: JobSuccessFeedbackProps) {
  return (
    <div className="mt-8 text-center py-6">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2E7D32] flex items-center justify-center text-white text-2xl font-bold">
        ✓
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        Candidatura Enviada!
      </h3>
      <p className="text-gray-300 text-sm">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="mt-6 px-6 py-2.5 bg-[#DB2A6B] hover:bg-[#b81d54] text-white rounded-xl font-medium transition-all"
      >
        Fechar
      </button>
    </div>
  );
}
