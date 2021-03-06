const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// ***Pre Heroku Upload Testing***
// const config = require('config');

const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const jwtSecret = process.env.jwtSecret;

// User Model
const User = require('../../models/User');

// @route POST api/auth
// @desc Auth user
// @access Public

router.post('/', (req, res) => {
    const { userName, password } = req.body;

    //Simple Validation
    if(!userName || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    User.findOne({ userName })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist' });


            //Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

                    jwt.sign(
                        { id: user.id },

                        // ***Pre Heroku Upload Testing***
                        // config.get('jwtSecret'),
                        
                        jwtSecret,
                        { expiresIn: 7200 },
                        (err, token) => {
                            if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        userName: user.userName
                                    }
                                })
                        }
                    )
                })
        })
});

// @route GET api/auth/user
// @desc Get user data
// @access Private
router.get('/user', auth, (req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;