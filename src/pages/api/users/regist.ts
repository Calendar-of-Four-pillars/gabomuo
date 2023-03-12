/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { authOptions } from '../auth/[...nextauth]';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);

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
    const profile = await client.user.update({
      where: {
        email: session?.user.email
      },
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
      profile
    });
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
}

export default withHandler({ method: 'PUT', handler, isPrivate: true });
