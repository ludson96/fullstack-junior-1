import schema from '../../../utils/validateRequest';

export default async function POST(request: Request) {
  try {
    const person = await request.text();

    if (!person) {
      return Response.json(
        { message: 'Request body is empty. Please provide the required data in the request body.' },
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const { error, value } = schema.validate(JSON.parse(person));

    // Se houver erro na validação, retorna uma resposta de erro
    if (error) {
      return new Response(
        JSON.stringify({ message: error.details[0].message }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Se a validação for bem-sucedida, continua com o processamento da requisição
    return new Response(
      JSON.stringify({ message: `Thank you for your application, ${value.name}.` }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 201,
      },
    );
  } catch (error) {
    // Se ocorrer algum erro durante o processamento da requisição, retorna uma resposta de erro
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
