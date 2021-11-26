const path = require('path')
const HOMEDIR = path.join(__dirname, '..');
const express = require('express')
const router = express.Router()

const QuizQuestionsService = require(path.join(HOMEDIR, 'services', 'quizQuestions-service'));
const quizQuestions = require('../models/quizQuestionsSchema')
//route GetALL Categories

router.get("/", async(req,res)=>{
    const allQuizQuestions = await QuizQuestionsService.findAllQuizQuestions(req.query);
    res.json(allQuizQuestions);

})

//route POSTALL san id 

router.post("/", async(req,res)=>{
    const tryToSave = await QuizQuestionsService.saveOne(req.body);
    res.json(tryToSave);
})


//Get Categorie  avec Id

router.get('/:id', async(req, res)=>{
    console.log(req.params)
    const {id} = req.params;
    const quizQuestions = await QuizQuestionsService.findOneQuizQuestion(id);
    res.json(quizQuestions)
})


// PUT avec id 

router.put("/:id", async(req, res)=>{
    const {id}=req.params

    const {name}=req.body
    quizQuestions.findOneAndUpdate({id},{name})
    .then(quizQuestions=>res.send(quizQuestions))
    .catch(err=>console.log(err))
})

//Delete avec id 

router.delete("/:id", async(req, res)=>{
    const {id}=req.params
    const quizQuestions = await QuizQuestionsService.deleteOne(id);
    res.json(quizQuestions)
})

module.exports = router