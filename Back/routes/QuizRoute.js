const path = require('path')
const HOMEDIR = path.join(__dirname, '..');
const express = require('express')
const router = express.Router()
const quiz = require('../models/quizSchema')
const QuizService = require(path.join(HOMEDIR, 'services', 'quiz-service'));

//GETALL Quiz

router.get("/", async(req, res) => {
    const allQuizs = await QuizService.findAllQuiz(req.query);
    res.json(allQuizs);
})

//route POSTALL sans id 

router.post("/", async(req, res) => {
    const tryToSave = await QuizService.saveOne(req.body);
    res.json(tryToSave);
})

//Get Quiz with id 

router.get("/:_id", async(req, res)=>{
    console.log(req.params)
    const {_id} = req.params;
    const quiz = await QuizService.findOneQuiz(_id);
    res.json(quiz)
})

//PUT with id 

router.put("/:_id", async(req, res) => {
    const {_id}=req.params
    const {name} = req.body
    quiz.findByIdAndUpdate({_id}, {name})
    .then(quiz => res.send(quiz))
    .catch(err => console.log(err))
})

// Delete with id

router.delete("/:_id", async(req, res)=>{
    const {_id}=req.params
    const quiz = await QuizService.deleteOneQuiz(_id);
    res.json(quiz)
})

module.exports = router