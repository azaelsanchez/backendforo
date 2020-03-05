const express = require ('express');
const app = express();
const morgan = require('morgan');


//Configs
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
//Inicia el server
app.listen(app.get('port'),() =>{
    console.log(`Server runnig on ${app.get('port')}`);
});