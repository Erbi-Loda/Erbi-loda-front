import jwt from "jsonwebtoken"

export const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
            username: user.username,
            pcpu:user.passwordCPU
        },
        "ak14",
        {
            expiresIn: "2h",
        }
    )
}

export const verifyToken = async (token) => {
    try{
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e){
        return null
    }
} 