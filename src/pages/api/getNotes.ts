import { prisma } from "../../utils/database"
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  prisma.note.findMany().then(posts => {
    res.status(200).json(posts)
  })
  //res.status(200).json('test')
}