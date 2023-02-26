/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);
  try {
    const exist = await client.friend.findUnique({
      where: { id: req.query.id as string }
    });
    if (!exist) {
      res.json({
        ok: false,
        msg: '없는 데이터 요청입니다.'
      });
      return;
    }
    if (exist?.userId !== session?.id) {
      res.json({
        ok: false,
        msg: '권한이 없습니다.'
      });
      return;
    }

    await client.friend.delete({
      where: { id: req.query.id as string }
    });

    res.json({
      ok: true,
      msg: '삭제 완료'
    });
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
}

export default withHandler({ method: 'DELETE', handler, isPrivate: true });
