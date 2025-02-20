import Users from "../models/users.js"
import { ROLES } from "../utils/constants.js"

export const buyerGuard = async (req, res, next) => {
    try {
        const user = req.user
        if (user.role === ROLES.BUYER)
            return res.status(403).json({
                message: "forbidden"
            })

        return next() //to continue

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
export const sellerGuard = async (req, res, next) => {
    try {
        const user = req.user
        if (user.role === ROLES.SELLER)
            return res.status(403).json({
                message: "forbidden"
            })

        return next() //to continue

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
export const adminGuard = async (req, res, next) => {
    try {
        const user = req.user
        if (user.role === ROLES.ADMIN)
            return res.status(403).json({
                message: "forbidden"
            })

        return next() //to continue

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

