/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { authOptions } from '../auth/[...nextauth]';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);

  const {
    body: { key, emotion, title, content }
  } = req;

  try {
    const calendar = await client.calendar.create({
      data: {
        key,
        emotion,
        title,
        content,
        user: {
          connect: {
            email: session?.user.email
          }
        }
      }
    });

    res.json({
      ok: true,
      calendar
    });
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
}

export default withHandler({ method: 'POST', handler, isPrivate: true });
