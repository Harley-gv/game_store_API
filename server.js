const { app } = require('./app');
const { db } = require('./utils/db.util');

//import models
const { User } = require('./models/user.model');
const { Review} = require('./models/review.model');
const { Game } = require('./models/game.model');
const { Console } = require('./models/console.model');

// define port on server init
const port = '5000'

//DB Relations
//Users 1 --- m Reviews
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User);

//Games 1 --- m Reviews
Game.hasMany(Review, { foreignKey: 'gameId' });
Review.belongsTo(Game);

//Games m --- m Consoles
Game.belongsToMany(Console, { through: 'gamesInConsoles' });
Console.belongsToMany(Game, { through: 'gamesInConsoles' });

db.authenticate()
  .then(() => console.log('db authenticate'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('db sync'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`express server running on port: ${port}`);
});