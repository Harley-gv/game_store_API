const express = require('express');

//controllers
const {
    createConsole,
    getAllConsoles,
    updateNameConsoles,
    deleteConsoles,
    assignGameToConsole,
} = require('../controllers/console.controller');

//middlewares
const { consoleExists } = require('../middlewares/consoleExists.middleware');
const { protectSession } = require('../middlewares/auth.middleware');

const consoles = express.Router()

consoles.get('/', getAllConsoles);

consoles.use(protectSession);

consoles.post('/', createConsole);

consoles.post('/assign-console', assignGameToConsole);

consoles
    .use('/:id', consoleExists)
    .route('/:id')
    .patch(updateNameConsoles)
    .delete(deleteConsoles);

    
module.exports = { consoles }