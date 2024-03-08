const express = require('express');
const router = express.Router();
const userRegister = require('../model/userRegistration');

router.post('/signUp', async (req, res) => {
    try {
        const newUser = new userRegister({
            fullName: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            country: req.body.country,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });
        
        const saveUser = await newUser.save();
        res.json(saveUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
