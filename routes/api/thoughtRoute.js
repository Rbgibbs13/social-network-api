const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

router.route('/reactions/:thoughtId').post(addReaction).delete(removeReaction);

module.exports = router;