const express = require('express')
const productRouter = express.Router()

productRouter.route("/api/product")
    .post((req, res) => productController.create(req, res))
    .get((req, res) => productController.search(req, res))

productRouter.route("/api/user/code")
    .get((req, res) => productController.searchOne(req, res))


productRouter.route("/api/product/avatar")
    .post((req, res) => productController.changeAvatar(req, res))


module.exports = productRouter