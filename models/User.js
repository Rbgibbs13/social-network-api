const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`;
    return re.test(email);
};

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            maxLength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please use a valid email'],
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