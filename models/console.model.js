const { db, DataTypes } = require('../utils/db.util')

const Console = db.define('console', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    company: {
        allowNull: false,
        type: DataTypes.STRING
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    }
})

module.exports = { Console }