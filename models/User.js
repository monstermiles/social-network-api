const {Schema, model} = require('mongoose');
// const mongoose = require('mongoose')

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

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
        // match: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`,
    },
    // thoughts: [
    //     {type: Schema.Types.ObjectId,
    //      ref: 'Thoughts' 
    //     }
    // ],
    // friends: [
    //     {type: Schema.Types.ObjectId,
    //     ref: 'User'}
    // ]
});

const User = model('user', userSchema)


module.exports = User;