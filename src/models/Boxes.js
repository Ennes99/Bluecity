const sequelize = require('sequelize');
const box = require('../database/databaseSequelize');

const Boxes = box.define('Boxes', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
        },

    occupied:{
        type: sequelize.TINYINT
    },

    userId:{
        type: sequelize.INTEGER,
        references: 'Users',
        referencesKey: 'id'
    },

    parkingId:{
        type: sequelize.INTEGER,
        references: 'Parkings',
        referencesKey: 'id'
    },

    createdAt:{
        type:sequelize.DATE
    },

    updatedAt:{
        type:sequelize.DATE
    },
});