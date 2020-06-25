const express = require('express');
const app = express();

//process.env.PORT -> search variable PORT
app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

//Put all routers of server
app.use(require('./src/routers/usersRouters'));
//app.use(require('./src/routers/boxesRouters'));
//app.use(require('./src/routers/parkingsRouters'));
//app.use(require('./src/routers/scootersRouters'));
//app.use(require('./src/routers/sequelizemetaRouters'));

app.listen(app.get('PORT'), ()=>{
    console.log(`SERVER IN PORT ${app.get('PORT')}`);
});
