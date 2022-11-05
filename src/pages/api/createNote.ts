import { prisma } from "../../utils/database"
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  prisma.note.create({
    data: {
      title: 'Created Note',
      created: new Date(),
      content: 'Created note content',
    },
  }).then(posts => {
    res.status(200).json(posts)
  });
}