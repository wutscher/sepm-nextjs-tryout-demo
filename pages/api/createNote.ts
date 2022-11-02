import { PrismaClient, Note } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

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