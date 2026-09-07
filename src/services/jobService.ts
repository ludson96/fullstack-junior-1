import { Job, JobApplicationPayload, JobApplicationResponse } from '../types/job';

const API_SECRET = 'naranja-labs';

const defaultHeaders = {
  'Content-Type': 'application/json',
  secret: API_SECRET,
};

/**
 * Busca a lista de vagas com suporte a filtro opcional por nível
 */
export async function fetchJobs(level?: string): Promise<Job[]> {
  const query = level && level !== 'Todos'
    ? `?level=${encodeURIComponent(level)}`
    : '';
  const url = `/api/jobs${query}`;

  const response = await fetch(url, {
    headers: defaultHeaders,
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Erro ao buscar vagas (Status ${response.status})`);
  }

  return response.json();
}

/**
 * Busca os detalhes de uma vaga específica por ID
 */
export async function fetchJobById(id: number): Promise<Job> {
  const response = await fetch(`/api/job/${id}`, {
    headers: defaultHeaders,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Vaga com ID ${id} não encontrada`);
  }

  return response.json();
}

/**
 * Submete a candidatura do candidato para a rota /api/job/submit
 */
export async function submitJobApplication(
  payload: JobApplicationPayload,
): Promise<JobApplicationResponse> {
  const response = await fetch('/api/job/submit', {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Falha ao enviar candidatura.');
  }

  return data;
}
