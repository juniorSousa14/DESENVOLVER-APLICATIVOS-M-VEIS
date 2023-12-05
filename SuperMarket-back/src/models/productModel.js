const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    code: { type: String, unique: true, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    name: { type: String, unique: true, required: true },
})

module.exports = mongoose.model('Product', productSchema)