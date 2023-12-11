const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nome: { type: String, required: true },
    login: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    
})

module.exports = mongoose.model('User', userSchema)