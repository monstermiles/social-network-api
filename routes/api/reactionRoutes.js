const router = require('express').Router();

// Require model
const { Reaction } = require('../../models');

router.post('/create', (req, res) => {
    try {
    const newReaction = new Reaction(req.body)
    newReaction.save();
    res.status(200).json()
    } catch (err){
      res.err
    }
  })



module.exports = router;