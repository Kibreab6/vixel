const express= require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {
        title: 'my first express app',
        message: 'hello this is kb'
    });
});

module.exports = router;


 