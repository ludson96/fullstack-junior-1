import { NextRequest } from 'next/server';
import jobs from '../../../data/jobs';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get('level');

  // Retorna todos os jobs ou filtra pelo nível especificado
  const filteredJobs = query ? jobs.filter((job) => job.level === query) : jobs;

  return Response.json(filteredJobs);
}
