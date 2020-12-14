// ***Pre Heroku Upload Testing***
// const config = require('config');

const jwt = require('jsonwebtoken')
const jwtSecret = process.env.jwtSecret

function auth (req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if(!token) 
      return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        //Verify token

        // ***Pre Heroku Upload Testing***
        // const decoded = jwt.verify(token, config.get('jwtSecret'));
        
        const decoded = jwt.verify(token, jwtSecret);
        // Add user from payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;