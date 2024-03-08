const express = require('express');
const router  = express.Router();
import User from '../model/userRegistration';

router.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });


  
module.exports = router;