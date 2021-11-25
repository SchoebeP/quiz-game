const path = require('path')
const HOMEDIR = path.join(__dirname, '..');
const express = require('express')
const router = express.Router()

const QuizService = require(path.join(HOMEDIR, 'quiz-service'));

//GETALL Quiz

router.get("/", async(req, res))