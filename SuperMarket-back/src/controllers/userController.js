const { json } = require('express')
const userModel = require('../models/userModel')
const jsonWebToken = require('jsonwebtoken')

module.exports = {

    login: async (req, res) => {
        try {
            const result = await userModel.findOne({ login: req.body.login, senha: req.body.senha })
            console.log(JSON.stringify(result))
            if (result) {
                const secret = 'enfvioçnhvewrjkbfrejvbnvjetnvjkrbvgrvrtiuvlhetvuebjvertvrebvjkrgbvertjkvbrjuhfdtghnioreucgheycubgecbygcguweguvgeknbvgeurgbkukevugkceyvkcueg'
                const token = await jsonWebToken.sign(req.body, secret)
                res.status(200).json({ message: 'Usuario logado com sucesso', userData: { token: token, login: req.body.login, nome: result.nome } })
            }

        } catch (err) {
            res.status(500).json({ massage: "Dados Incorretos" })

        }
    },
    getUsers: (req, res) => {
        userModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({ massage: "Não foi possivel recuperar os usuarios" })
        })

    },
    deleteUserById: async (req, res) => {
        try {
            await userModel.deleteOne({ email: req.params.id })
            res.status(200).json({ massage: "Usuario removido com sucesso" })


        } catch (err) {
            res.status(500).json({ massage: "Não foi possivel remover o usuario" })
        }
    },
    getUser: async (req, res) => {
        try {
            await userModel.findById({ mat: res.body.mat })
            res.status(200).send(result)
        } catch (err) {
            res.status(500).json({ massage: "Não foi possivel recuperar p usuario no momento" })

        }
    },
    updateUser: async (req, res) => {
        try {
            await userModel.updateOne({ mat: req.boby.mat }, req.boby)
            res.status(200).send({ massage: "usuario atualizado com sucesso" })
        } catch (err) {
            res.status(500).json({ massage: "Não foi possivel atualizar os dados " })
        }
    },

    createUser: async (req, res) => {
        try {
            const findResult = await userModel.find({ nome: req.body.nome, login: req.body.login, email: req.body.email, senha: req.body.senha })
            if (findResult.length) {
                res.status(500).json({ massage: "Usuario já existe" })
            } else {
                const createResult = await userModel.create(req.body)
                res.status(200).json({ massage: 'O usuario ${createResult._doc.name} foi criado com sucesso' })
            }
        } catch (err) {
            res.status(403).send({ massage: " Não foi possivel criar o usuario " })
        }
    }
}


