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
        msg: '없는 정보 입니다.'
      });
      return;
    }

    if (exist.userId !== session?.id) {
      res.json({
        ok: false,
        msg: '권한이 없습니다.'
      });
      return;
    }
  } catch (error) {
    res.json({
      ok: false,
      error
    });
    return;
  }
  const {
    body: {
      name,
      gender,
      birth_year,
      birth_month,
      birth_day,
      birth_hour,
      birth_minute,
      is_moon,
      doubled,
      region
    }
  } = req;

  try {
    const friend = await client.friend.update({
      where: { id: req.query.id as string },
      data: {
        name,
        gender,
        birth_year,
        birth_month,
        birth_day,
        birth_hour,
        birth_minute,
        is_moon,
        doubled,
        region
      }
    });

    res.json({
      ok: true,
      friend
    });
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
}

export default withHandler({ method: 'PUT', handler, isPrivate: true });
