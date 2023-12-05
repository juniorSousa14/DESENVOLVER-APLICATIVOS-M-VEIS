'use strict'

require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/supermarket")

const express = require('express')
const app = express()

const PORT = process.env.port || 3000
const middlewareAuth = require('./middlewareAuth')
const useRouter = require('../src/routers/userRouter')
const productRouter = require('../src/routers/productRouter')


app.use(express.json())
app.use(middlewareAuth)

app.use(useRouter)
app.use(productRouter)

app.listen(PORT, () => {
    console.log("Servidor no ar em http://localhost:", PORT)
})

