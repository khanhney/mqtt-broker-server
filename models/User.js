const mongoose          = require('mongoose');
const { hash, compare } = require('bcrypt');
const { sign  }         = require('../helpers/jwt');
const UserSchema = mongoose.Schema({
    username    : { type: String, trim: true, unique: true },
    password    : { type: String, trim: true },
    fullname    : { type: String },
    email       : { type: String, trim: true, unique: true },
    /**
     * 1: active
     * 2: deactive
     */
    status      : { type: Number, default: 1 },
    createAt: { type: Date, default: Date.now }
});
const UserOrigin = mongoose.model('user', UserSchema);

class User extends UserOrigin {
    static Insert(username, password, email, fullname) {
        return new Promise(async resolve => {
            try {

                let checkExist   = await User.findOne({
                    $or: [
                        { username: username },
                        { email   : email }
                    ]
                });
                if (checkExist) return resolve({ error: true, message: 'username_or_mail_existence' });
                let hashPassword = await hash(password, 8);
                let newUser      = new User({ username, password: hashPassword, fullname, email });
                let saveUser     = await newUser.save();
                if (!saveUser) return resolve({ error: true, message: 'cannot_insert_user' });
                return resolve({ error: false, data: saveUser });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }

    static Login(username_mail, password) {
        return new Promise(async resolve => {
            try {
                let checkExistence  = await User.findOne({
                    $or: [
                        { username: username_mail },
                        { email   : username_mail }
                    ]
                });
                if (!checkExistence) return resolve({ error: true, message: 'user_not_existence' });
                let checkMatchPassword = await compare(password, checkExistence.password);
                if (!checkMatchPassword) return resolve({ error: true, message: 'something_wrong_access_denied' });
                let token = await sign({ checkExistence });
                if (!token) return resolve({ error: true, message: 'cannot_sign_token' });
                return resolve({
                    error: false, data: { infoUser: checkExistence, token: token }
                });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        })
    }
}

module.exports = User;