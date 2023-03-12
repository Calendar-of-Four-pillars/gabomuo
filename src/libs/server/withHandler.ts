/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  isPrivate?: boolean;
}

export default function withHandler({ method, isPrivate = false, handler }: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    const session = await getServerSession(req, res, authOptions);
    if (req.method !== method) {
      return res.status(405).end();
    }

    if (isPrivate && !session) {
      return res.status(401).json({ ok: false, error: 'Please Log In' });
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
