const {Schema, model} = require('mongoose');

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

  
const userSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String, 
        unique: true,
        required: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },
    thoughts: [
        {type: Schema.Types.ObjectId,
         ref: 'Thoughts' 
        }
     ],
    friends: [
        {type: Schema.Types.ObjectId,
        ref: 'User'}
    ]
},
{
    toJSON: {
        virtuals: true,
      },
}

);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  


const User = model('user', userSchema)


module.exports = User;