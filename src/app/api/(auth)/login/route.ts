import * as userServices from '@/services/user';

const login = async (req: Request) => {
  const body = await req.json();
  const result = await userServices.findOne(body);
  return Response.json(result);
};

export const POST = login;
