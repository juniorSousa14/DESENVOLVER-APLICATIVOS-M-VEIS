const express = require('express')
const userController = require('../controllers/userController')
const useRouter = express.Router()

useRouter.route("/api/createUser")
    .post((req, res) => userController.addToFavorites(req, res))

useRouter.route("/api/user/email")
    .get((req, res) => userController.getUser(req, res))
    .put((req, res) => userController.updateUser(req, res))
    .delete()

useRouter.route("/api/login")
    .post((req, res) => userController.login(req, res))

module.exports = useRouter