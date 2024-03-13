const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(removeUser);

router.route('/friends/:userId').put(addFriend).delete(removeFriend);

module.exports = router;