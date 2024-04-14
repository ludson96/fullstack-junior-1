// Este middleware será executado antes da solicitação ser enviada ao manipulador.
import { headers } from 'next/headers';

// Este middleware valida a secret passada pelo headers da requisição.
export default function middleware() {
  const headersList = headers();
  const secret = headersList.get('secret');

  const FIXED_SECRET = 'naranja-labs';

  if (secret !== FIXED_SECRET) {
    return Response.json(
      { message: 'Secret provided is invalid. Make sure the correct secret is being sent' },
      { status: 401 },
    );
  }
}

// Configuração do middleware.
export const config = {
  matcher: ['/jobs', '/job/:path*'],
};
