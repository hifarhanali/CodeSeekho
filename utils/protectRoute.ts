import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Middleware for checking the jwt token
// and then updating the user object in the request

export const protect = async (req: NextApiRequest, res: NextApiResponse) => {
    let token
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer') &&
        process.env.JWT_SECRET
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            if (!token) throw new Error('No token found')
            // Decoding the jwt to get the user email, stored in id.
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            if (typeof decoded === 'string') {
                throw new Error('Invalid token')
            } else {
                // Find the user with the email in the token
                const user = await prisma.user.findUnique({
                    where: {
                        email: decoded.email
                    }
                })
                if (!user) {
                    // if no email is found, return a 401 errorr
                    throw new Error('USer not Authorized')
                } else {
                    return user
                }
            }
        } catch(error) {
            console.error(error)
            throw new Error('User not Authorized')
        }
    }
    if (!token) {
        // If no token, return a 401 error
        throw new Error('User not Authorized')
    }
}