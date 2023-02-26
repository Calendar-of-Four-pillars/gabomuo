/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);
  const {
    body: { emotion, title, content }
  } = req;

  try {
    const calendarExist = await client.calendar.findFirst({
      where: { id: req.query.id as string, userId: session?.id }
    });
    if (!calendarExist) {
      res.json({
        ok: false,
        msg: '데이터가 없습니다'
      });
      return;
    }
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error
    });
    return;
  }

  try {
    const calendar = await client.calendar.update({
      where: { id: req.query.id as string },
      data: {
        emotion,
        title,
        content
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
  res.json({
    ok: true
  });
}

export default withHandler({ method: 'PUT', handler, isPrivate: true });
