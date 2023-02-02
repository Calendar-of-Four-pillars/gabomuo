/* eslint-disable no-underscore-dangle */
import { NextApiRequest, NextApiResponse } from 'next';
import convert from 'xml-js';
import request from 'request';
import { getOrderedNumberFromTime } from 'src/libs/time';
import { ganziByIndex, getStartGanziIndexOnTime } from 'src/libs/ganzi';
import makeUrlToPublicApiFromClient from 'src/libs/httpUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
  // let queryParams = `?${encodeURIComponent('serviceKey')}=${encodeURIComponent(
  //   '7lSZ7WTWeBu5mpqVJ9htdJwjvRT2HBrg/nue9AM+vSZFqT/bgr4iAD+A0v/15A0LVVn0ZXfsF5tAKkZ1z4kfUg=='
  // )}`; /* Service Key */
  // queryParams += `&${encodeURIComponent('solYear')}=${encodeURIComponent(
  //   req.query.year as string
  // )}`; /* */
  // queryParams += `&${encodeURIComponent('solMonth')}=${encodeURIComponent(
  //   req.query.month as string
  // )}`; /* */
  // queryParams += `&${encodeURIComponent('solDay')}=${encodeURIComponent(
  //   req.query.day as string
  // )}`; /* */

  request.get(makeUrlToPublicApiFromClient(req.query), (err, response, body) => {
    if (err) {
      res.json({ ok: false, data: err });
    } else if (response.statusCode === 200) {
      const result = body;
      const convertedJson = convert.xml2json(result, { compact: true, spaces: 4 });
      const resultJson = JSON.parse(convertedJson).response.body.items.item;
      const ganziStartIndex = getStartGanziIndexOnTime(resultJson.lunIljin._text.split(`(`)[0]);
      const orderedTimeCount = getOrderedNumberFromTime(
        Number(req.query.hour),
        Number(req.query.minute)
      );

      const sijin = ganziByIndex[ganziStartIndex + orderedTimeCount];

      res.json({
        ok: true,
        data: {
          lunSecha: resultJson.lunSecha._text.split(`(`)[0],
          lunWolgeon: resultJson.lunWolgeon._text.split(`(`)[0],
          lunIljin: resultJson.lunIljin._text.split(`(`)[0],
          sijin
        }
      });
    }
  });
}
