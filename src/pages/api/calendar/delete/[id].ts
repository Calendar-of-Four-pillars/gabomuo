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
      }
    });

    if (session?.id === calendar?.userId) {
      try {
        await client.calendar.delete({
          where: { id: req.query.id as string }
        });
        res.json({
          ok: true
        });
      } catch (error) {
        res.json({
          ok: false,
          error
        });
      }
    }

    if (session?.id !== calendar?.userId) {
      res.json({
        ok: false,
        msg: '삭제 권한이 없습니다'
      });
    }

    res.json({
      ok: true
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: '게시글을 찾지 못했습니다.',
      error
    });
  }
}

export default withHandler({ method: 'DELETE', handler, isPrivate: true });
