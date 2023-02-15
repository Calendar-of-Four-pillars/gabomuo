import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/client';
import { ganziByIndex } from 'src/libs/ganzi';
import _ from 'lodash';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const thisYear = new Date().getUTCFullYear();
  const thisMonth = new Date().getUTCMonth();
  const yearFromQuery = (req.query.year as string) ?? thisYear;
  const monthFromQuery = (req.query.month as string) ?? thisMonth;
  const month = await client.sajuDate.findMany({
    where: {
      datekey: {
        startsWith: `${yearFromQuery}-${monthFromQuery}-`
      }
    }
  });

  const dayOfWeekIndex = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  const data = month.map((day) => {
    const dayNumber = day.datekey.split('-').pop();

    const convertedDay = Object(day)

    return {
      day: Number(dayNumber),
      ganji: ganziByIndex[Number(convertedDay.info?.day as string)],
      dayOfWeek: dayOfWeekIndex[new Date(day.datekey).getDay()]
    };
  });

  const sortedData = _.sortBy(data, 'day');

  res.json({
    ok: true,
    month: `${monthFromQuery}월`,
    data: sortedData
  });
}
