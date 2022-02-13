const {Schema, model, Mongoose, Types} = require('mongoose');
// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId


const reactionSchema = new Schema({
    reactionId: {
    type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
},
{
    toJSON: {
        getters:true
    }
}

)


//   * Use a getter method to format the timestamp on query


module.exports = reactionSchema 