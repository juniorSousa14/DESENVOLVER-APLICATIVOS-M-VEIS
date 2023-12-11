const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    thumbnail: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
})
module.exports = mongoose.model('Favorite', favoriteSchema)

