const express = require('express');
const router = express.Router()
const  validateUser  = require('../middlewares/userMiddleware')

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/',validateUser, createUser);

router.put('/:id',validateUser, updateUserById);
router.delete('/:id', deleteUserById)


module.exports = router;


