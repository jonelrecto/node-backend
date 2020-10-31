const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user')
const checkAuth = require('../middleware/check-auth')

router.get('/', checkAuth, UserController.users_get_all)

router.post('/signup', UserController.users_signUp)

router.post('/login', UserController.users_login)

router.delete('/:userId', checkAuth, UserController.users_delete)

module.exports = router
