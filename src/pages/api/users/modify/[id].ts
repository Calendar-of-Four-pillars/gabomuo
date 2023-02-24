/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
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
  res.json({
    ok: true
  });
}

export default withHandler({ method: 'PUT', handler, isPrivate: true });
