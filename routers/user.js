
const express       = require('express');
const route         = express.Router();
const body          = require('body-parser');
let { UserLogin }   = require('../middlewares/user');

route.use(body.urlencoded());
route.use(body.json());
/**
 * MODEL
 */
let USER_MODEL = require('../models/User');

route.post('/register', async(req, res) => {
    let { username, password, email, fullname  } = req.body;
    let resp = await USER_MODEL.Insert(username, password, fullname, email);
    res.json(resp);
});

route.post('/login', async(req, res) => {
    let { username_mail, password } = req.body;
    let resp = await USER_MODEL.Login(username_mail, password);
    res.json(resp);
})

route.get('/hello', UserLogin, async(req, res) => {
    let userInfo = req.user;
    res.json(userInfo);
})

module.exports = route;