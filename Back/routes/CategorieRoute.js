const path = require('path')
const HOMEDIR = path.join(__dirname, '..');
const express = require('express')
const router = express.Router()

const CategorieService = require(path.join(HOMEDIR, 'services', 'categories-service'));

//route GetALL Categories

router.get("/", async(req,res)=>{
    const allCategories = await CategorieService.findAllCategories(req.query);
    res.json(allCategories);

})

//route POSTALL san id 

router.post("/", async(req,res)=>{
    const tryToSave = await CategorieService.saveOne(req.body);
    res.json(tryToSave);
})


//Get Categorie  avec Id

router.get('/:_id', async(req, res)=>{
    const categorie = await CategorieService.findOneCategories(req.query);
    res.json(categorie)
})


// PUT avec id 

router.put("/:_id", async(req, res)=>{
    res.json({msg: 'Put id'})
})

//Delete avec id 

router.delete("/:_id", async(req, res)=>{
    res.json({msg: 'Delete id'})
})

module.exports = router