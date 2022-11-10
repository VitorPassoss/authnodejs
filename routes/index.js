var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
const homecontroller = require('../controllers/homeController')
const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const inicioController = require('../controllers/inicioController')
const logoutController = require('../controllers/logoutController')


router.get('/',  homecontroller.mostrarHome);
router.get('/register', registerController.mostrarForm)
router.post('/register',registerController.registrarUser)
router.get('/login', loginController.mostrarForm)
router.post('/login', loginController.validarUsuario)
router.get('/inicio', auth , inicioController.mostrarApp)
router.get('/logout', logoutController.destruirToken )

module.exports = router;
