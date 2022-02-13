const router = require('express').Router();

const { Thought } = require('../../models');


////////////////////////////////////////view all thoughts ////////////////////////////////////////////////////////
router.get('/', (req, res) => {
  Thought.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////add a thought////////////////////////////////////////////////////////
router.post('/', (req, res) => {
    try {
    const newThought = new Thought(req.body)
    newThought.save();
    res.status(200).json()
    } catch (err){
      res.json(err)
    }
  })
////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////find thought by id/////////////////////////////////////////////////////////
router.get('/:id', (req, res) => {
  Thought.findOne({
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


//////////////////////////////////add a reaction//////////////////////////////////////////////////////////////
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const newReaction = await Thought.findOneAndUpdate(
      {_id:req.params.thoughtId},
      {$addToSet: {reactions: req.body}},
      {runValidators: true, new: true}
    )
    res.status(200).json(newReaction)
  } catch (err) {
    res.json(err)
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////delete a reaction///////////////////////////////////////////////////////////
router.delete('/:thoughtId/reactions/:reactionID', async (req, res) => {
  try {
    const deleteReaction = await Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$pull: {reactions: req.params.reactionID}},
      {runValidators: true, new: true}
    )
    res.status(200).json(deleteReaction)
  } catch (err) {
    res.json(err)
  }
});


// removeVideoResponse(req, res) {
//   Video.findOneAndUpdate(
//     { _id: req.params.videoId },
//     { $pull: { reactions: { responseId: req.params.responseId } } },
//     { runValidators: true, new: true }
//   )
//     .then((video) =>
//       !video
//         ? res.status(404).json({ message: 'No video with this id!' })
//         : res.json(video)
//     )
//     .catch((err) => res.status(500).json(err));

////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;