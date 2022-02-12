const router = require('express').Router();

// Require model
const { User } = require('../../models');

///////////////////////////////////////view all users/////////////////////////////////////////////////////////
router.get('/', (req, res) => {
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });
////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////add a user//////////////////////////////////////////////////////////
  
///////need error handling for failed email validation////////
router.post('/create', (req, res) => {
    try {
    const newUser = new User(req.body)
    newUser.save();
    res.status(200).json()
    } catch (err){
      res.err
    }
  })
////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////find user by id/////////////////////////////////////////////////////////
router.get('/:id', (req, res) => {
  User.findOne({
    _id: req.params.id
  }, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;







  // * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query