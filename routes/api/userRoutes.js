const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
    addFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).get(getUser).post(createUser);

router.route('/:userId').put(updateUser).delete(removeUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;