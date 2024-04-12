import { NextRequest } from 'next/server';
import jobs from './jobs';

export default async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('level');
  const filteredJobs = query ? jobs.filter((job) => job.level === query) : jobs;
  return Response.json(filteredJobs);
}
