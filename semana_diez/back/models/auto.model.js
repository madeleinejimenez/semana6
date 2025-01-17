const { DataTypes } = require("sequelize");
const sequelize = require("../models/connect");
const autoController = require('../controllers/auto.controller');
const Auto = sequelize.define("Auto", {
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    npassengers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nengine: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "autos", 
    timestamps: false, 
});

module.exports = Auto;
