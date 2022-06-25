import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
import bcrypt from "bcryptjs"
import { generateToken } from '../../utils/generateToken'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end()
  }
  
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (!user) {
      return res.status(401).json({
        message: "User does not exist"
      })
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (passwordMatch) {
      
      return res.status(200).json({
        email: user.email,
        name: user.name,
        profession: user.profession,
        token: generateToken(email),
      })
    } else {
      return res.status(401).json({
        message: "Invalid Credentials"
      })
    }
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }

}
