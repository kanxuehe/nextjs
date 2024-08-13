import * as userServices from '@/services/user';

const login = async (req: Request) => {
  const body = await req.json();
  console.log('req:', body);
  // const result = await userServices.findOne(body);
  return Response.json(body);
};

export const POST = login;
