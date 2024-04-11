import { NextApiRequest, NextApiResponse } from 'next';
import { headers } from 'next/headers'

export function middleware(request: NextApiRequest, response: NextApiResponse) {
  const headersList = headers()
  const secret = headersList.get('secret')

  if (secret !== 'naranja-labs') {
    return Response.json(
      { success: false, message: 'Secret inválido' },
      { status: 401 }
    )
  }
}
