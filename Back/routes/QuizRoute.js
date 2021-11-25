const path = require('path')
const HOMEDIR = path.join(__dirname, '..');
const express = require('express')
const router = express.Router()

const QuizService = require(path.join(HOMEDIR, 'quiz-service'));

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
    const quiz = await QuizService.findOneQuiz(req.query);
    res.json(quiz)
})

//PUT with id 

router.put("/:_id", async(req, res) => {
    res.json({msg: 'Put id'})
})

// Delete with id

router.delete("/:_id", async(req, res)=>{
    res.json({msg: 'Delete id'})
})

module.exports = router