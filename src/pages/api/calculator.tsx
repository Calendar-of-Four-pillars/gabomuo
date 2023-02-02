/* eslint-disable no-underscore-dangle */
import { NextApiRequest, NextApiResponse } from 'next';
import convert from 'xml-js';
import request from 'request';
import { getOrderedNumberFromTime, isLastSeason } from 'src/libs/time';
import { ganziByIndex, ganziByKey, getStartGanziIndexOnTime } from 'src/libs/ganzi';
import makeUrlToPublicApiFromClient from 'src/libs/httpUtils';
import client from 'src/libs/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const yearFromQuery = req.query.year as string;
  const monthFromQuery = req.query.month as string;
  const dayFromQuery = req.query.day as string;
  const hourFromQuery = req.query.hour as string;
  const minuteFromQuery = req.query.minute as string;
  const { seasontime }: any = await client.year.findUnique({
    where: {
      year: yearFromQuery
    }
  });

  const nextSeasonTime = seasontime[String(Number(monthFromQuery))][String(Number(dayFromQuery))];

  request.get(makeUrlToPublicApiFromClient(req.query), (err, response, body) => {
    if (err) {
      res.json({ ok: false, data: err });
    } else if (response.statusCode === 200) {
      const result = body;
      const convertedJson = convert.xml2json(result, { compact: true, spaces: 4 });
      const resultJson = JSON.parse(convertedJson).response.body.items.item;
      console.log('resultJson', resultJson);

      const yearGanziCode =
        ganziByKey[resultJson.lunSecha._text.split(`(`)[0] as keyof typeof ganziByKey];
      let monthGanziCode =
        ganziByKey[resultJson.lunWolgeon._text.split(`(`)[0] as keyof typeof ganziByKey];
      const dayGanziCode =
        ganziByKey[resultJson.lunIljin._text.split(`(`)[0] as keyof typeof ganziByKey];

      const ganziStartIndex = getStartGanziIndexOnTime(resultJson.lunIljin._text.split(`(`)[0]);
      const orderedTimeCount = getOrderedNumberFromTime(
        Number(req.query.hour),
        Number(req.query.minute)
      );

      const sijin = ganziByIndex[ganziStartIndex + orderedTimeCount];

      if (
        nextSeasonTime &&
        isLastSeason(
          Number(nextSeasonTime.hour),
          Number(nextSeasonTime.minute),
          Number(hourFromQuery),
          Number(minuteFromQuery)
        )
      ) {
        console.log('prev');
        if (monthGanziCode - 1 < 1) {
          monthGanziCode = 60;
        } else {
          monthGanziCode -= 1;
        }
      }

      res.json({
        ok: true,
        data: {
          lunSecha: ganziByIndex[yearGanziCode],
          lunWolgeon: ganziByIndex[monthGanziCode],
          lunIljin: ganziByIndex[dayGanziCode],
          sijin
        }
      });
    }
  });
}
