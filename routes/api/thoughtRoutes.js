const router = require('express').Router();

const { Thought } = require('../../models');
/////////////////////////////////////add a thought////////////////////////////////////////////////////////
router.post('/create', (req, res) => {
    try {
    const newThought = new Thought(req.body)
    newThought.save();
    res.status(200).json()
    } catch (err){
      res.json(err)
    }
  })
////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;