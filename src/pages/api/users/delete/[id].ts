/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  try {
    await client.friend.delete({
      where: { id: req.query.id as string }
    });

    res.json({
      ok: true
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

export default withHandler({ method: 'DELETE', handler, isPrivate: true });
