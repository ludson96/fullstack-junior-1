import { NextRequest } from 'next/server';
import jobs from '../../data/jobs';

export default async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get('level');

  // Verifica se foi passado algum parâmetro na query string 'level', se não ele retorna todos os jobs
  const filteredJobs = query ? jobs.filter((job) => job.level === query) : jobs;

  return Response.json(filteredJobs);
}
