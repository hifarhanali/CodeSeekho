import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'
import { protect } from '../../../utils/protectRoute'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(301).json({})
    }
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const {collectionId} = JSON.parse(req.body)
        const snippets = await prisma.snippet.findMany({
            where: {
                collectionId
            },
            include: {
                collection: true,
                user: true
            }
        })
        res.status(200).json(snippets)
    } catch(error) {
        console.log(error)
        res.status(400).json({})
    }
}