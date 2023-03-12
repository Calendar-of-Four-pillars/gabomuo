/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);

  try {
    const calendar = await client.calendar.findUnique({
      where: {
        id: req.query.id as string
      },
      include: {
        friends: true
      }
    });

    if (session?.id === calendar?.userId) {
      res.json({
        ok: false,
        calendar
      });
    }

    if (session?.id !== calendar?.userId) {
      res.json({
        ok: false,
        msg: '조회 권한이 없습니다'
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      msg: '게시글을 찾지 못했습니다.',
      error
    });
  }
}

export default withHandler({ method: 'GET', handler, isPrivate: true });
