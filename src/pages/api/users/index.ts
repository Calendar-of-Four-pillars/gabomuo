import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { authOptions } from '../auth/[...nextauth]';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.json({
      ok: false,
      msg: '로그인이 필요합니다.'
    });
    return;
  }
  const profiles = await client.friend.findMany({
    where: {
      userId: session.id as string
    }
  });

  res.json({
    ok: true,
    profiles
  });
}

export default withHandler({ method: 'GET', handler, isPrivate: true });
