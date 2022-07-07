const express = require('express')

//route import
const { users } = require('./routes/users.routes');
const { games } = require('./routes/games.routes');
const { consoles } = require('./routes/consoles.routes');

//init express
const app = express()
app.use(express.json())

//Users Endpoint
app.use('/api/v1/users', users);
//Games Endpoint
app.use('/api/v1/games', games);
//Console Endpoint
app.use('/api/v1/consoles', consoles);

//errors

const { globalErrorHandler } = require('./controllers/globalErrorHandler.controller');

const { AppError } = require('./utils/appError.util');

app.all('*', (req, res, next) => {
    next(
        new AppError(
            `${req.method} ${req.originalUrl} not found in this server`,
            404
        )
    );
});

app.use(globalErrorHandler);



module.exports = { app }