var express = require('express');
var router = express.Router();
var Question = require('../model/question')

router.post('/add',async (req,res)=>{
  try{
    const { body:{question , answer,others} } = req
    let question = await Question.create({question , answer,others});
    res.send(question)

  }catch(err){
    console.log(err)
    res.status(400).send(err)
  }
})

router.get('/all',async (req,res)=>{
  try{
    let question = await Question.findAll();
    res.send(question)

  }catch(err){
    console.log(err)
    res.status(400).send(err)
  }
})

router.patch('/update/:id',async (req,res)=>{
  try{
    const { body:{cuisine_name}, params } = req
    let question = await Question.update({question , answer,others},{where: {id : params.id}});
    res.send(question)
  }
  catch(err){
    console.log(err)
    res.status(400).send(err)
  }
})

router.delete('/delete/:id',async (req,res)=>{
  try{
    const { params } = req
    let question = await Question.destroy({where: {id : params.id}});
    res.send(question)
  }
  catch(err){
    console.log(err)
    res.status(400).send(err)
  }
})
module.exports = router;
