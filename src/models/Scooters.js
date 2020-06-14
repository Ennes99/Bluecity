const sequelize = require('sequelize');
const box = require('../database/databaseSequelize');

const Boxes = box.define('Scooters', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
        },

    userId:{
        type: sequelize.INTEGER,
        references: 'Users',
        referencesKey: 'id'
    },

    boxId:{
        type: sequelize.INTEGER,
        references: 'Boxes',
        referencesKey: 'id'
    },

    createdAt:{
        type:sequelize.DATE
    },

    updatedAt:{
        type:sequelize.DATE
    },
});

module.exports = Boxes;