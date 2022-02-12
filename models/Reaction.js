const {Schema, model, Mongoose, Types} = require('mongoose');
// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId


const reactionSchema = new Schema({
    reactionId: Types.ObjectId,

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


//   * Use a getter method to format the timestamp on query



const Reaction = model('reaction', reactionSchema)

module.exports = Reaction 