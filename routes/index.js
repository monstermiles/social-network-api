const router = require('express').Router();

// Require model
const { User } = require('../models');

router.get('/users', (req, res) => {
    // Using model in route to find all documents that are instances of that model
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  module.exports = router;