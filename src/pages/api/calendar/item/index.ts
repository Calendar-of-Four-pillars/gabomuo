/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const session = await getServerSession(req, res, authOptions);
  //   const thisYear = new Date().getUTCFullYear();
  //   const thisMonth = new Date().getUTCMonth();
  //   const thisDay = new Date().getDay();
  const yearFromQuery = req.query.year;
  const monthFromQuery = req.query.month;
  const dayFromQuery = req.query.day;

  if (yearFromQuery && monthFromQuery && dayFromQuery) {
    try {
      const calendars = await client.calendar.findMany({
        where: {
          key: `${yearFromQuery}-${monthFromQuery}-${dayFromQuery}` as string,
          userId: session?.id
        }
      });

      res.json({
        ok: true,
        calendars
      });
    } catch (error) {
      res.json({
        ok: false,
        error
      });
    }
    return;
  }
  if (yearFromQuery && monthFromQuery && !dayFromQuery) {
    try {
      const calendars = await client.calendar.findMany({
        where: {
          key: {
            startsWith: `${yearFromQuery}-${monthFromQuery}` as string
          },
          userId: session?.id
        }
      });

      res.json({
        ok: true,
        calendars
      });
    } catch (error) {
      res.json({
        ok: false,
        error
      });
    }
    return;
  }

  if (yearFromQuery && !monthFromQuery && !dayFromQuery) {
    try {
      const calendars = await client.calendar.findMany({
        where: {
          key: {
            startsWith: `${yearFromQuery}-` as string
          },
          userId: session?.id
        }
      });

      res.json({
        ok: true,
        calendars
      });
    } catch (error) {
      res.json({
        ok: false,
        error
      });
    }
    return;
  }
  if (!yearFromQuery && !monthFromQuery && !dayFromQuery) {
    try {
      const calendars = await client.calendar.findMany({
        where: {
          userId: session?.id
        }
      });

      res.json({
        ok: true,
        calendars
      });
    } catch (error) {
      res.json({
        ok: false,
        error
      });
    }
  }
}

export default withHandler({ method: 'GET', handler, isPrivate: true });
