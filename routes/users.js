var express = require('express');
var router = express.Router();
const path=require('path'); 
var users=require('../models/users'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/all',function(req,res){
  // users.create({
  //   name:'Vijay Pawar',
  //   email:'vijay',
  //   password:'vijay'
  // },function(err,data){
  //   res.json({data:data});
  // });
  users.find(function(err,data){
    if(err) throw err;
    res.json({data:data});
  });
})

router.post('/login',function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  console.log(email+password);
  res.send(email);
  // if(email !='' && password !=''){
  //   users.findOne({email:'admin'},function(err,data){
  //     if(err){
  //       res.json({success:0,message:'Invalid Credentilas',data:err});
  //     }else{
  //       if(data){
  //       res.json({success:1,message:'Login success',data:data});
  //       }else{
  //         res.json({success:0,message:'Invalid Login ',data:err});
  //       }
  //     }
  //   });
  // }else{
  //   res.json({message:'all fields are required !'});
  // }
});

module.exports = router;
