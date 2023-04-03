const express = require('express');
const { getAbout, postAbout } = require('../controller/About');
const { getContact, postContact } = require('../controller/Contact');
const {homePost , homeGet} = require('../controller/Home');
const { portfolioGet, portfoliopost, portfoliotitleGet, portfoliotitlepost } = require('../controller/Portfolio');
const { getUser, postUser, login } = require('../controller/User');
const { jwt } = require("../middlewares/jwt");
const router = express();

router.get('/home', homeGet)
router.post('/home', [jwt], homePost)
router.get('/portfolio', portfolioGet)
router.post('/portfolio', [jwt], portfoliopost)
router.get('/portfolio/title', portfoliotitleGet)
router.post('/portfolio/title', [jwt], portfoliotitlepost)
router.get('/about', getAbout)
router.post('/about', [jwt], postAbout)
router.get('/contact', getContact)
router.post('/contact', [jwt], postContact)
router.get('/user', getUser)
router.post('/user', [jwt], postUser)
router.post('/login', login)


module.exports = router;
