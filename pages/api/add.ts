// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { snippetInfo } = req.body;
  try {
    const snippet = await prisma.snippet.create({
      data: snippetInfo
    })
    res.status(201).json({
      data: snippet
    });

  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
}
