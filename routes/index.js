var express = require('express');
var router = express.Router();
var multer=require('multer');
var path=require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// SET STORAGE
var storage=multer.diskStorage({
	destination:function(req,file,callBack){
		callBack(null,'public/images');
	},
	filename:function (req,file,callBack){ 
		callBack(null, ((Math.random(100,999) * Date.now()).toString(36).replace(/\./g)) + path.extname(file.originalname));
	} 
});
var upload =multer({storage:storage});
router.post('/add_image',upload.single('image'), function(req,res,next){
  let file=req.file;
  if(!file){
      const error=new Error('Choose Files');
      return next(error);
  }  
  let newImage={
      title:req.body.title,
      description:req.body.description,
      image:file.filename
  };
res.json({success:1,message:newImage});
});

router.post('/add_user',function(req,res,next){
  let user={
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  };
  res.json({success:1,message:user});
})
module.exports = router;
