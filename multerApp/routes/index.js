var express = require('express');
var router = express.Router();
const path = require('path');
const randombytes = require('randombytes');
const multer = require('multer');


//multer things
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, randombytes(8).toString('hex')+ path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload',(req,res) =>{
  res.render('upload')
});

router.post('/upload', upload.single('image'), (req,res) =>{
  console.log(req.file);
  res.send(req.file);
  // res.render('imagepage',{
  //   image : `/images/${req.file.filename}`
  // })
})




module.exports = router;
