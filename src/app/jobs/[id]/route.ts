import jobs from '../../../data/jobs';

export default async function GET(_request: Request, { params }: { params: { id: string } }) {
  if (params.id === undefined || !params.id) {
    return Response.json({ message: 'Job ID is required.' }, { status: 400 });
  }

  // Verifica se o id é um número, caso não seja retorna um erro personalizado
  if (Number.isNaN(Number(params.id))) {
    return Response.json({ message: 'ID must be a number' }, { status: 404 });
  }

  const job = jobs.find((currentJob) => currentJob.id === Number(params.id));

  if (!job) {
    return Response.json({ message: 'Job ID not found.' }, { status: 404 });
  }

  return Response.json(job);
}
