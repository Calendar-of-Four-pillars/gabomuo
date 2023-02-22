/* eslint-disable no-underscore-dangle */
import { NextApiRequest, NextApiResponse } from 'next';
import { getOrderedNumberFromTime, getTimeGanziCode, isLastSeason, isNextDay } from 'src/libs/time';
import { calTenGodsFromEightWords, ganziByIndexSecond } from 'src/libs/ganzi';
import client from 'src/libs/client';
import { twelveMovement } from 'src/libs/calculatedValue';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const yearFromQuery = req.query.year as string;
  const monthFromQuery = req.query.month as string;
  const dayFromQuery = req.query.day as string;
  const hourFromQuery = req.query.hour as string;
  const minuteFromQuery = req.query.minute as string;

  const result = {
    year: 0,
    month: 0,
    day: 0,
    time: 0
  };
  const date = await client.sajuDate.findUnique({
    where: {
      datekey: `${yearFromQuery}-${monthFromQuery}-${dayFromQuery}`
    }
  });

  if (!date) {
    res.json({
      ok: false,
      data: '데이터가 없습니다.'
    });
    return;
  }
  const newDateObj = Object(date?.info);

  if (isNextDay(Number(hourFromQuery), Number(minuteFromQuery))) {
    result.year = Number(newDateObj.year);
    result.month = Number(newDateObj.month);
    result.day = newDateObj.day + 1 === 60 ? 0 : Number(newDateObj.day) + 1;
  }

  if (!isNextDay(Number(hourFromQuery), Number(minuteFromQuery))) {
    result.year = Number(newDateObj.year);
    result.month = Number(newDateObj.month);
    result.day = Number(newDateObj.day);
  }

  const nextSeason = await client.seasonYear.findUnique({
    where: {
      year: `${yearFromQuery}-${monthFromQuery}-${dayFromQuery}`
    }
  });

  const sizi = getOrderedNumberFromTime(Number(hourFromQuery), Number(minuteFromQuery));
  result.time = getTimeGanziCode(result.day, sizi);

  const sipSinResult = calTenGodsFromEightWords({
    year: ganziByIndexSecond[result.year],
    month: ganziByIndexSecond[result.month],
    day: ganziByIndexSecond[result.day],
    time: ganziByIndexSecond[result.time]
  });

  if (!nextSeason) {
    res.json({
      ok: true,
      data: {
        targetDate: date?.datekey,
        saju: {
          year: ganziByIndexSecond[result.year],
          month: ganziByIndexSecond[result.month],
          day: ganziByIndexSecond[result.day],
          time: ganziByIndexSecond[result.time]
        },
        sipsin: sipSinResult,
        luck: {
          year: twelveMovement[ganziByIndexSecond[result.year].gan.name][
            ganziByIndexSecond[result.year].ji.name
          ],
          month:
            twelveMovement[ganziByIndexSecond[result.month].gan.name][
              ganziByIndexSecond[result.month].ji.name
            ],
          day: twelveMovement[ganziByIndexSecond[result.day].gan.name][
            ganziByIndexSecond[result.day].ji.name
          ],
          time: twelveMovement[ganziByIndexSecond[result.time].gan.name][
            ganziByIndexSecond[result.time].ji.name
          ]
        }
      }
    });
    return;
  }

  const newNextSeason = Object(nextSeason);
  if (
    nextSeason &&
    isLastSeason(
      Number(newNextSeason.seasontime?.hour as string),
      Number(newNextSeason.seasontime?.minute as string),
      Number(hourFromQuery),
      Number(minuteFromQuery)
    )
  ) {
    if (monthFromQuery === '2') {
      if (result.month - 1 < 0) {
        result.month = 59;
      } else {
        result.month -= 1;
      }
      if (result.year - 1 < 0) {
        result.year = 59;
      } else {
        result.year -= 1;
      }
    }
    if (monthFromQuery !== '2') {
      if (result.month - 1 < 0) {
        result.month = 59;
      } else {
        result.month -= 1;
      }
    }
  }
  const si = getOrderedNumberFromTime(Number(hourFromQuery), Number(minuteFromQuery));
  result.time = getTimeGanziCode(result.day, si);
  const seasonAppliedSipsin = calTenGodsFromEightWords({
    year: ganziByIndexSecond[result.year],
    month: ganziByIndexSecond[result.month],
    day: ganziByIndexSecond[result.day],
    time: ganziByIndexSecond[result.time]
  });

  res.json({
    ok: true,
    data: {
      targetDate: date?.datekey,
      saju: {
        year: ganziByIndexSecond[result.year],
        month: ganziByIndexSecond[result.month],
        day: ganziByIndexSecond[result.day],
        time: ganziByIndexSecond[result.time]
      },
      sipsin: seasonAppliedSipsin,
      luck: {
        year: twelveMovement[ganziByIndexSecond[result.year].gan.name][
          ganziByIndexSecond[result.year].ji.name
        ],
        month:
          twelveMovement[ganziByIndexSecond[result.month].gan.name][
            ganziByIndexSecond[result.month].ji.name
          ],
        day: twelveMovement[ganziByIndexSecond[result.day].gan.name][
          ganziByIndexSecond[result.day].ji.name
        ],
        time: twelveMovement[ganziByIndexSecond[result.time].gan.name][
          ganziByIndexSecond[result.time].ji.name
        ]
      }
    }
  });
}
