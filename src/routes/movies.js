const { Router } = require('express');
const router = Router();

router.get('/movies', (req,res) =>{
    res.send("Movies");
});


module.exports = router;