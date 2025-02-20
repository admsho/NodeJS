import Users from "../models/users.js"

export const authMiddleware = async (req, res, next) => {
    try {
        const decodedToken = decodeURIComponent(req.headers.authorization)
        const foundUser = await Users.findOne(
            {
                where: { id: decodedToken } //or {userName:userName}
            }
        )

        if (!foundUser)
            return res.status(401).json({
                message: "User is unauthorized!"
            })

        req.user = foundUser.dataValues
        
        next() //to continue

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

