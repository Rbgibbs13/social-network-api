const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.error(err);
            return res.json(500).json(err);
        });
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true},
        ).then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    removeUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId})
        .then((user) => {
            Thought.deleteMany({ _id: { $in: user.thoughts }});
            res.status(200).json(`Deleted : ${user}`);
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        console.log("HELLOW");
        User.findOneAndUpdate({ _id: req.params.userId},
            { $addToSet: { friends: req.body.userId }},
            { new: true })
        .then((user) => {
            console.log(user);
            res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId})
        .then((user) => {
            let friend = User.findOne({ _id: req.params.friendId });
            user.friends.pull(friend);
            user.save();
            res.json(user);
        }).catch((err) => res.status(500).json(err));
    }
};