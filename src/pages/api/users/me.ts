import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { authOptions } from '../auth/[...nextauth]';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);
  const profile = await client.user.findUnique({
    where: {
      email: session?.user.email
    },
    include: {
      friends: true,
      calendars: true
    }
  });

  res.json({
    ok: true,
    profile
  });
}

export default withHandler({ method: 'GET', handler, isPrivate: true });
