import express, { Router } from "express";//importing bothb express and router inside it,,but only need router
import { getAllProduts, getSingleProduct, createProduct, updateProduct, deleteProduct } from "../controlers/products.js";
import { buyerGuard, sellerGuard, } from "../middlewares/roles.js"
const router = Router();
/**
 * loading a dummy data insteasd of DBnpm 
 */
//npm i cors : to allow anynomous to access my server
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
    },
];

// get list => get
router.get('/', getAllProduts);

// get item => get
router.get('/:id', getSingleProduct);

// create item => post
router.post('/', buyerGuard, createProduct);
// update item => put or patch (to change some of the object data)
router.put('/:id', buyerGuard, updateProduct);
//     const { id } = req.params;
//     const productIndex = products.findIndex((product) => product.id === +id);
//     // products[productIndex] = req.body; // not the best !!
//     products[productIndex] = { ...products[productIndex], ...req.body }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//     console.log(req.body);//to check the data sent from cliend body
//     res.status(200).json({
//         message: 'Product updated',
//         product: products[productIndex],
//     });
// });

// router.patch('/:id/change-price', (req, res) => {
//   const { id } = req.params;
//   const productIndex = products.findIndex((product) => product.id === +id);
//   // products[productIndex] = req.body; // not the best !!
//   products[productIndex].price = body.request.price;

//   res.status(200).json({
//     message: 'Product updated',
//     product: products[productIndex],
//   });
// });

// delete item => delete

router.delete('/:id', buyerGuard, sellerGuard, deleteProduct);
//     const productIndex = products.findIndex((product) => product.id === +id);
//     const pName = products[productIndex].name;//or let.. but beter practice to use const as we dont want the name to bechanged
//     products.splice(productIndex, 1); // remove item form the array
//     res.status(200).json({
//         message: `product ${pName} is deleted successfully !`
//     });
// });

export default router;
