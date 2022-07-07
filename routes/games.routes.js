const express = require('express');

//controllers
const {
    createGame,
    getAllGames,
    updateGame,
    deleteGame,
    reviewGame,
} = require('../controllers/game.controller');

//middleware
const { protectSession } = require('../middlewares/auth.middleware');
const { gameExists } = require('../middlewares/gameExists.middleware');


const games = express.Router()

games.get('/', getAllGames);

games.use(protectSession);

games.post('/', createGame);

games.post('/reviews/:gameId', gameExists, reviewGame);

games
    .use('/:id', gameExists)
    .route('/:id')
    .patch(updateGame)
    .delete(deleteGame);

module.exports = { games }