const sequelize = require('sequelize');
const box = require('../database/databaseSequelize');

const Boxes = box.define('Users', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
        },

    password_:{
        type: sequelize.STRING
    },

    name_:{
        type: sequelize.STRING
    },

    username:{
        type: sequelize.STRING
    },

    isAdmin:{
        type: sequelize.TINYINT
    },

    createdAt:{
        type:sequelize.DATE
    },

    updatedAt:{
        type:sequelize.DATE
    },
});