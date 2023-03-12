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

  try {
    const profile = await client.friend.findUnique({
      where: {
        id: req.query.id as string
      },
      include: {
        calendars: true
      }
    });

    if (!profile) {
      res.json({
        ok: false,
        msg: '없는 친구 입니다.'
      });
      return;
    }

    if (profile.userId !== session.id) {
      res.json({
        ok: false,
        msg: '삭제 권한이 없습니다.'
      });
      return;
    }
    res.json({
      ok: true,
      profile
    });
    return;
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
}

export default withHandler({ method: 'GET', handler, isPrivate: true });
