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
  const { name, profession, email, password } = JSON.parse(req.body);
  
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (user) {
        return res.status(401).json({
            message: "User already exists"
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const prismaResponse = await prisma.user.create({
            data: {
                name,
                profession,
                email,
                password: hashedPassword
            }
        })
        res.status(201).json({
            email: prismaResponse.email,
            token: generateToken(email),
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json(error)
    }

}
