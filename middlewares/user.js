let app         = require('express').Router();
let USER_MODEL  = require('../models/User');
let { verify }  = require('../helpers/jwt');
let bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

exports.UserLogin = app.use(async (req, res, next) => {
    let token = req.params.token || req.body.token || req.headers.token;
    if (!token) return res.json({ error: true, message: 'token_not_import' })
    let decode  = await verify(token);
    let infoUser = decode.checkExistence;
    let checkExistUser = await USER_MODEL.findOne({ username: infoUser.username, status: 1 });
    if (!checkExistUser) return res.json({ error: true, message: 'user_not_exist_or_status_deactive' });
    req.user = infoUser;
    next();
}); 