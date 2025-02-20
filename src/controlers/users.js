import { urlencoded } from "express";
import Users from "../models/users.js";

export const signUp = async (req, res) => {
    try {
        const user = req.body;
        if (user.role === "ADMIN")
            return res.status(401).json({
                message: 'Wrong role',
            });
        const createdUser = await Users.create(user)
        delete createdUser.dataValues.password //to remove password from returned object
        console.log(createdUser)

        res.status(201).json({
            message: 'User created',
            user: createdUser //  product,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const logIn = async (req, res) => {
    try {
        const { userName, password } = req.body;

        const foundUser = await Users.findOne(
            {
                where: { userName }//or {userName:userName}
            }
        )

        console.log(foundUser)
        if (!foundUser) {
            return res.status(404).json({
                message: "User Not Found!"
            })
        }
        if (foundUser.password !== password) {
            return res.status(400).json({
                message: "Password Not Match!"
            })
        }
        delete foundUser.dataValues.password;
        return res.status(200).json({
            message: 'Login Success',
            user: {
                ...foundUser.dataValues,
                token: encodeURIComponent(foundUser.dataValues.id)
            } //  product,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// export const getAllProduts = async (req, res) => {
//     try {
//         const products = await Products.findAll()
//         console.log(products)
//         if (!products.length)
//             return res.status(404).json({ message: "No items to show" })
//         return res.status(200).json(products);
//     }
//     catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }


// export const getSingleProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const findProduct = await Products.findOne({
//             where: { id }
//         })
//         if (!findProduct)
//             return res.status(404).json({ message: "This Product is not exist!" })
//         return res.status(200).json(findProduct)
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }


// export const updateProduct = async (req, res) => {
//     try {
//         const [updateProducts] = await Products.update({
//             name: req.body.name,
//             price: req.body.price
//         }, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         const item = await Products.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         if (!updateProducts)
//             return res.status(404).json({ message: "This Product is not exist!" })

//         return res.status(200).json({
//             message: 'Product updated',
//             product: item
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// export const deleteProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteProduct = await Products.destroy({
//             where: {
//                 id,
//             },
//             force: true,
//         });
//         console.log(deleteProduct)
//         if (!deleteProduct)
//             return res.status(404).json({ message: "This Product is not exist!" })
//         return res.status(200).json({
//             message: deleteProduct + " Product has been deleted!"
//         })

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }