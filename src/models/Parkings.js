const sequelize = require('sequelize');
const box = require('../database/databaseSequelize');

const Boxes = box.define('Parkings', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
        },

    lat:{
        type: sequelize.STRING
    },

    long_:{
        type: sequelize.STRING
    },

    adress:{
        type: sequelize.STRING
    },

    name_:{
        type:sequelize.STRING
    },

    createdAt:{
        type:sequelize.DATE
    },

    updatedAt:{
        type:sequelize.DATE
    },
});