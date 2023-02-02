// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/client';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await client.year.findUnique({
    where: {
      year: '1990'
    }
  });

  //   await client.year.create({
  //     data: {
  //       year: item.year,
  //       months: item.months
  //     }
  //   });
  //   const resultArr: { year: string; months: { create: never[] } }[] = [];
  //   Object.entries(seasondata).forEach(([yearKey, yearValue]) => {
  //     const yearElement = { year: yearKey, months: { create: [] } };
  //     Object.entries(yearValue).forEach(([monthKey, monthValue]) => {
  //       const monthElement = { month: monthKey, days: { create: [] } };
  //       Object.entries(monthValue).forEach(([dayKey, dayValue]) => {
  //         const dayElement = { day: dayKey, hour: dayValue.hour, minute: dayValue.minute };
  //         monthElement.days.create.push(dayElement);
  //       });
  //       yearElement.months.create.push(monthElement);
  //     });
  //     resultArr.push(yearElement);
  //   });

  //   resultArr.forEach(async (item) => {
  //     await client.year.create({
  //       data: {
  //         year: item.year,
  //         months: item.months
  //       }
  //     });
  //   });

  //   const arr = [
  //     {
  //       year: '1990',
  //       months: {
  //         create: [
  //           {
  //             month: '1',
  //             days: {
  //               create: [
  //                 {
  //                   day: '1',
  //                   hour: '12',
  //                   minute: '27'
  //                 }
  //               ]
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   ];
  //   await client.month.create({
  //     data: {
  //       month: '1'
  //     }
  //   });

  //   Object.keys(seasondata).forEach(async (item) => {
  //     await client.year.create({
  //       data: {
  //         year: item
  //       }
  //     });
  //   });
  //   await client.year.create({
  //     data: {
  //       year: '1990',
  //       months: {
  //         create: [
  //           {
  //             month: '1'
  //           }
  //         ]
  //       }
  //     }
  //   });
  res.status(200).json({ name: 'John Doe' });
}
