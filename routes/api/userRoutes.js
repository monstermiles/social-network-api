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
router.post('/', (req, res) => {
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

/////////////////////////////////////////edit a user///////////////////////////////////////////////////////
router.put('/:id', async (req, res) => {
  try {
  const userData = await User.findOneAndUpdate(
    {_id: req.params.id},
    {username: req.body.username},
    )
    res.status(200).json(userData)
  } catch (err){
    res.json(err)
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////delete user//////////////////////////////////////////////////////////
router.delete('/:id', (req, res) => {
try {
  const userData = User.findOneAndDelete({
    _id: req.params.id
  });
 res.status(200).json(userData)
}catch (err){
res.json(err)
}
});
////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;

