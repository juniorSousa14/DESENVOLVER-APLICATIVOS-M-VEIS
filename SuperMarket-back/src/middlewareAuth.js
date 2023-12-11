const jwtService = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const route = req.path
    const nonSecurityRoutes = ['/api/createUser', '/api/login']
    if (nonSecurityRoutes.includes(route) || route.includes('view')) {
        return next()
    }

    let token = req.headers.authorizatioon
    if (!token) {
        res.status(401).json({ massage: "Usuario não autorizado " })
        return
    }
    token = token.split(' ')[1]
    const secret = process.env.secret
    try {
        await jwtService.verify(token, secret)
        return next()
    } catch (err) {
        res.status(401).json({ massage: 'Usuario não autorizado ' })
        return
    }
}