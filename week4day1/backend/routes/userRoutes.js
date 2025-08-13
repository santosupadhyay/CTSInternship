const express = require('express')
const { getAllUsers, getUserById, updateUserById, deleteUserById, createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)

module.exports = router;