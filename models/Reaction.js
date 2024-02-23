const { Schema, model } = require('mongoose');
const formatTime = require('../utils/time.js');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatTime,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)