const express       = require('express');
const route         = express.Router();
const body          = require('body-parser');
let { UserLogin }   = require('../middlewares/user');

route.use(body.urlencoded());
route.use(body.json());
route.use(UserLogin);
/**
 * MODEL
 */
let INSTACES_MODEL = require('../models/Instance');

route.post('/', async(req, res) => {
    let infoUser        = req.user;
    let insertInstace   = await INSTACES_MODEL.Insert(infoUser._id);
    res.json(insertInstace);
});

route.get('/', async(req, res) => {
    let userID             = req.user._id;
    let listInstacesOfUser = await INSTACES_MODEL.ListInstacesOfUser(userID);
    res.json(listInstacesOfUser);
});

route.get('/:instaceID', async(req, res) => {
    let { instaceID }      = req.params;
    let userID             = req.user._id;
    let infoInstace        = await INSTACES_MODEL.InstaceDetail(instaceID, userID);
    res.json(infoInstace);
});

route.get('/:instaceID/:status', async(req, res) => {
    let { instaceID, status } = req.params;
    let  userID               = req.user._id;
    let updateInstaceUpdate   = await INSTACES_MODEL.UpdateStatus(instaceID, status, userID);
    return res.json(updateInstaceUpdate);
});

route.get('/update-user/:instaceID', async(req, res) => {
    let { instaceID }         = req.params;
    let userID                = req.user._id;
    let updateUserInstace     = await INSTACES_MODEL.rotateUser(instaceID, userID);
    res.json(updateUserInstace);
});

route.get('/update-pwd/:instaceID', async(req, res) => {
    let { instaceID }         = req.params;
    let userID                = req.user._id;
    let updateUserInstace     = await INSTACES_MODEL.rotatePwd(instaceID, userID);
    res.json(updateUserInstace);
});
module.exports = route;