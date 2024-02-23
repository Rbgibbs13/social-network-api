const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
    addFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(removeUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;