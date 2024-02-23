const { User, Thought, Reaction } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate (
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        ).then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughId})
        .then((thought) => res.status(200).json({ message: `Deleted: ${thought}`}))
        .catch((err) => res.status(500).json(err));
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        ).then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughId },
            { $pull : { reactions: { reactionId: req.params.reactionId }}},
            { runValidators: true, new: true}
        ).then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
};