const productModel = require('../models/productModel')
const productController = {
    search: async (req, res) => {
        const result = await productModel.find({})
        res.status(200).json(result)



    },
    searchOne: async (req, res) => {
        const result = await productModel.findOne({ code: req.body.code })
        res.status(200).json(result)


    },
    changeAvatars: (req, res) => {


    }

}

module.exports = productController