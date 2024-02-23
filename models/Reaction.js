const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
    {
        thoughtText: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            min_length: 1,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thoughts',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'friends',
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)