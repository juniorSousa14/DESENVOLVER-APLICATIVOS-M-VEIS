const express = require('express')
const userController = require('../controllers/userController')
const useRouter = express.Router()

useRouter.route("/api/user")
    .post((req, res) => userController.createUser(req, res))

useRouter.route("/api/user/email")
    .get((req, res) => userController.getUser(req, res))
    .put((req, res) => userController.updateUser(req, res))
    .delete()

useRouter.route("/api/login")
    .post((req, res) => useRouter.login(req, res))

module.exports = useRouter