import Products from "../models/products.js";


export const getAllProduts = async (req, res) => {
    try {
        const products = await Products.findAll()
        console.log(products)
        if (!products.length)
            return res.status(404).json({ message: "No items to show" })
        return res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const findProduct = await Products.findOne({
            where: { id }
        })
        if (!findProduct)
            return res.status(404).json({ message: "This Product is not exist!" })
        return res.status(200).json(findProduct)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const createProduct = await Products.create(product)
        console.log(createProduct)
        res.status(201).json({
            message: 'Product created',
            product: createProduct //  product,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const [updateProducts] = await Products.update({
            name: req.body.name,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
        const item = await Products.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!updateProducts)
            return res.status(404).json({ message: "This Product is not exist!" })

        return res.status(200).json({
            message: 'Product updated',
            product: item
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Products.destroy({
            where: {
                id,
            },
            force: true,
        });
        console.log(deleteProduct)
        if (!deleteProduct)
            return res.status(404).json({ message: "This Product is not exist!" })
        return res.status(200).json({
            message: deleteProduct + " Product has been deleted!"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}