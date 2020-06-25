const keysDataBase = require('../keys/keys'); 

const Sequelize = require('sequelize');

const sequelize = new Sequelize(keysDataBase.database, keysDataBase.user, keysDataBase.password, {
    host: keysDataBase.host,
    dialect: keysDataBase.dialect,
    port: keysDataBase.port,
    pool: {
        max: 5,
        min: 0
    }
});

sequelize.authenticate()
  .then(() => {
    console.log(`Conect the database with sequelize: ${keysDataBase.database}`);
  })
  .catch(err => {
    console.log(`Exist the error ${err}`)
  })
module.exports=sequelize;
