const express = require('express');

//controllers
const {
    getAllUsers,
    createUser,
    login,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller');
//Middlewares
const { userExists } = require('../middlewares/userExists.middleware');
const {
    protectSession,
    verifyUserAccount,
} = require('../middlewares/auth.middleware');
const { createUserValidators } = require('../middlewares/validators.middleware');


const users = express.Router()

users.post('/signup', createUserValidators, createUser);

users.post('/login', login);

users.use(protectSession);

users.get('/', getAllUsers);

users
    .use('/:id', userExists)
    .route('/:id')
    .patch(verifyUserAccount, updateUser)
    .delete(verifyUserAccount, deleteUser);

module.exports = { users }