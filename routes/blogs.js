var express=require('express');
var router=express.Router();

// GET blogs listing
router.get('/',function(req,res,next){
    res.send('blogs');
});

router.post('/add-blog',function(req,res,next){
    res.json({message:'blogs'});
});

modules.exports=router;