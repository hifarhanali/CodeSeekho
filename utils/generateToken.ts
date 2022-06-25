import jwt from 'jsonwebtoken'
export const generateToken = (email: string) => {
    if (process.env.JWT_SECRET) {
        return jwt.sign({email}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })
    } else {
        console.log("JWT_SECRET not set in .env")
        return null
    }
}