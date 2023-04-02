var express = require('express');
var router = express.Router();
const randombytes = require('randombytes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/random',(req,res) =>{
  res.send(randombytes(16).toString('hex'));
})



module.exports = router;
