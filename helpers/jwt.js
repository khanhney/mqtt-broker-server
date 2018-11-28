const jwt = require('jsonwebtoken');

const SECRET_KEY = 'amcdy2uwr2udwquyf23423';

function sign(obj) {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, SECRET_KEY, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    }); 
}

function verify(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, obj) => {
            if (err) return reject(err);
            resolve(obj);
        });
    });
}

module.exports = { sign, verify };