const express = require ('express');
const app = express();
const morgan = require('morgan');


//middlewares
app.use(morgan('dev'));


//Inicia el server
app.listen(3000, () =>{
    console.log(`Server runnig on ${3000}`);
});