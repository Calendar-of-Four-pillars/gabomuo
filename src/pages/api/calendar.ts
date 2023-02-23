import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/client';
import { ganziByIndex } from 'src/libs/ganzi';
import _ from 'lodash';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  const nextSeasonDate = await client.seasonYear.findMany({
    where: {
      year: {
        startsWith: `${yearFromQuery}-${monthFromQuery}-`
      }
    }
  });

  const dayOfWeekIndex = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  const data = month.map((day) => {
    const dayNumber = day.datekey.split('-').pop();
    const targetMonth = day.datekey.split('-')[1];
    const convertedDay = Object(day);

    if (nextSeasonDate && day.datekey === nextSeasonDate[0].year) {
      if (targetMonth === '2') {
        return {
          day: Number(dayNumber),
          ganji: ganziByIndex[Number(convertedDay.info?.day as string)],
          dayOfWeek: dayOfWeekIndex[new Date(day.datekey).getDay()],
          nextSeason: nextSeasonDate[0].seasontime,
          nextYear: true
        };
      }
      return {
        day: Number(dayNumber),
        ganji: ganziByIndex[Number(convertedDay.info?.day as string)],
        dayOfWeek: dayOfWeekIndex[new Date(day.datekey).getDay()],
        nextSeason: nextSeasonDate[0].seasontime
      };
    }

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

export default withHandler({ method: 'GET', handler });
