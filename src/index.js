const express = require ('express');
const app = express();
const morgan = require('morgan');


//Configs
app.set('port',process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes

//Inicia el server
app.listen(app.get('port'),() =>{
    console.log(`Server runnig on ${app.get('port')}`);
});