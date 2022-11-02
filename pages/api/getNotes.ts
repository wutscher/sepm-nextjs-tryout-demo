import { PrismaClient, Note } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  prisma.note.findMany().then(posts => {
    res.status(200).json(posts)
  })
  //res.status(200).json('test')
}