import { jobs } from './jobs';

export async function GET() {
  return Response.json(jobs);
}
