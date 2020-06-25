const Sequelize = require('sequelize');
const sequelize = require('./database');

/**
 * MODEL
 */
//Sync Database
/*
sequelize.sync({force: false}).then(()=> {
 
    console.log('Correct! Database is OK')
 
}).catch((err)=> {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});*/

const Scooter = sequelize.define('scooters', {
    //attributes
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement : true
    },

    userId: {
        type: Sequelize.INTEGER(11),
        references: 'users',
        referencesKey: 'id'
    },

    parkingId: {
        type: Sequelize.INTEGER(11),
        references: 'parkings',
        referencesKey: 'id'
    }, 

    createAt: {
        type: Sequelize.DATE,
        allowNull: false
    },

    updateAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
    //options
    freezeTableName: true,
    timestamps: false
});

module.exports = Scooter;

