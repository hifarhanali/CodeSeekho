import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
import { protect } from '../../utils/protectRoute'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        return createCollection(req, res)
    } else if (req.method === "GET") {
        return getCollections(req, res)
    } else if (req.method === "PUT") {

    } else if (req.method === "DELETE") {
        return deleteCollection(req, res)
    }
}

const createCollection = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const {name} = req.body
        const collection = await prisma.collection.create({
            data: {
                name,
                userId: user.email
            }
        })
        res.status(201).json(collection)
    } catch(error) {
        console.log(error)
        res.status(400).end()
    }
}

const getCollections = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const collections = await prisma.collection.findMany({
            where: {
                userId: user.email
            }
        })
        res.status(200).json(collections)
    } catch(error) {
        console.log(error)
        res.status(400).end()
    }
}

const deleteCollection = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const {id} = req.body
        const collection = await prisma.collection.delete({
            where: {
                id
            }
        })
        res.status(200).json(collection)
    } catch(error) {
        console.log(error)
        res.status(400).end()
    }
}