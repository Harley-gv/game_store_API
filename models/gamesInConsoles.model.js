const { db, DataTypes } = require('../utils/db.util');
const { Console } = require('./console.model');
const { Game } = require('./game.model');

const GamesInConsoles = db.define('gamesInConsoles', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Game,
      key: 'id'
    }
  },
  consoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Console,
      key: 'id'
    }
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

module.exports = { GamesInConsoles };