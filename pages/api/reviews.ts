import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
import { protect } from '../../utils/protectRoute'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        return createReview(req, res)
    }
}

const createReview = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const { review, snippetId} = JSON.parse(req.body)
        const m_review = await prisma.review.create({
            data: {
                review,
                snippetId,
                userId: user.email
            },
            include: {
                user: true,
            }
        })
        res.status(201).json(m_review)
    } catch (error) {
        console.log(error)
        res.status(400).json({})
    }
}