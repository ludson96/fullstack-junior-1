import { NextApiRequest, NextApiResponse } from 'next';
import { headers } from 'next/headers'

export function middleware(request: NextApiRequest, response: NextApiResponse) {
  const headersList = headers()
  const secret = headersList.get('secret')

  const FIXED_SECRET = 'naranja-labs';

  if (secret !== FIXED_SECRET) {
    return Response.json(
      { message: 'Secret provided is invalid. Make sure the correct secret is being sent' },
      { status: 401 }
    )
  }
}
