import * as userServices from '@/services/user';

const register = async (request: Request) => {
  const body = await request.json();
  const result = await userServices.createOne(body);
  return Response.json(result);
};

export const POST = register;
