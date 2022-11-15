import type { NextApiRequest, NextApiResponse } from 'next';

export type UserData = {
  name: string;
  username: string;
  password: string;
};

type RequestData = {
  username: string;
  password: string;
};

type ResponseData =
  | Omit<UserData, 'password'>
  | {
      error: true;
      message: string;
    };

const USERS: UserData[] = [
  {
    name: 'Tom the Admin',
    username: 'admin',
    password: '123456',
  },
  {
    name: 'Ryan the User',
    username: 'user',
    password: '123456',
  },
];

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: true,
      message: 'Please POST a username and password to this endpoint',
    });
  }

  await new Promise((resolve) => setTimeout(resolve, 2.5 * 1000));

  const requestData = JSON.parse(req.body) as RequestData;

  if (!requestData.username) {
    return res.status(400).json({
      error: true,
      message: 'Missing username',
    });
  }

  if (!requestData.password) {
    return res.status(400).json({
      error: true,
      message: 'Missing password',
    });
  }

  const user = USERS.find((user) => requestData.username === user.username);

  if (!user) {
    return res.status(400).json({
      error: true,
      message: `No user found matching username "${requestData.username}".`,
    });
  }

  if (user.password !== requestData.password) {
    return res.status(400).json({
      error: true,
      message: 'Invalid password.',
    });
  }

  res.status(200).json({
    name: user.name,
    username: user.username,
  });
};

export default handler;
