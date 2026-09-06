// Tipagens do domínio de Vagas e Candidaturas

export type JobLevel = 'Junior' | 'Senior' | 'Pleno';
export type JobStatus = 'open' | 'closed';

export interface Job {
  id: number;
  job: string;
  level: string;
  status: JobStatus | string;
}

export interface JobApplicationPayload {
  name: string;
  age: number;
  phone: string;
  state: string;
  city: string;
}

export interface JobApplicationResponse {
  message: string;
}

export interface ApiErrorResponse {
  message?: string;
  error?: string;
}
