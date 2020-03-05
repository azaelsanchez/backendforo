const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');

router.get('/', (req,res) =>{
    res.json(movies);
});

router.post('/',(req,res)=>{
    const {title} = req.body;
    if(title){
       const id = movies.length + 1;
        const newMovie = {...req.body, id};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.send('no se almaceno');
    }
    res.send('recibido');
});


module.exports = router;