import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
import { protect } from '../../utils/protectRoute'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        return createSnippet(req, res)
    } else if (req.method === "GET") {
        return getSnippets(req, res)
    } else if (req.method === "PUT") {
        return updateSnippet(req, res)
    } else if (req.method === "DELETE") {
        return deleteSnippet(req, res)
    }
}

const createSnippet = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const {code, name, collectionId, programmingLanguage} = JSON.parse(req.body)
        const snippet = await prisma.snippet.create({
            data: {
                code,
                collectionId,
                name,
                programmingLanguage,
                likes: 0,
                userId: user.email
            },
            include: {
                user: true,
                collection: true
            }
        })
        res.status(201).json(snippet)
    } catch(error) {
        console.log(error)
        res.status(400).end()
    }
}

const getSnippets = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        // const user = await protect(req, res)
        // if (!user || !user.email) {
        //     return res.status(401).json({
        //         message: "User not Authorized"
        //     })
        // }
        const snippets = await prisma.snippet.findMany({
            // where: {
            //     userId: user.email
            // },
            include: {
                user: true,
                collection: true,
                reviews: true
            }
        })
        res.status(200).json(snippets)
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}

const updateSnippet = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const {id} = JSON.parse(req.body)
        const snippet = await prisma.snippet.update({
            where: {
                id
            },
            data: {
                ...JSON.parse(req.body)
            }
        })

    } catch (error) {

    }
}

export const deleteSnippet = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await protect(req, res)
        if (!user || !user.email) {
            return res.status(401).json({
                message: "User not Authorized"
            })
        }
        const {id} = JSON.parse(req.body)
        const snippet = await prisma.snippet.findUnique({
            where: {
                id: id
            }
        })
        if (snippet && snippet.userId === user.email) {
            await prisma.snippet.delete({
                where: {
                    id: id
                }
            })
            return res.status(200).json({})
        } 
        return res.status(404).json({})
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}