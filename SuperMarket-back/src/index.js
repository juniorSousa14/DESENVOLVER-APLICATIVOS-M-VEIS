'use strict'

require('dotenv').config()
const mongoose = require('mongoose')
const http = require('http')
mongoose.connect("mongodb://127.0.0.1:27017/supermarket")

const express = require('express')
const app = express()
const server = http.createServer(app)
const socketIo = require('socket.io')
const io = socketIo(server, {})

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', msg)

    })
    socket.on('disconnect', () => {
        console.log("Dispositivo desconectado ")
    })
})

const PORT = process.env.port || 3000
const middlewareAuth = require('./middlewareAuth')
const useRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
const favoriteRouter = require('./routers/favoriteRouter')


app.use(express.json())
app.use(middlewareAuth)
app.use(useRouter)
app.use(productRouter)
app.use(favoriteRouter)


server.listen(PORT, () => {
    console.log("Servidor no ar em http://localhost:", PORT)
})

