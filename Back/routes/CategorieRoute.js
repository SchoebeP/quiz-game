const path = require('path')
const HOMEDIR = path.join(__dirname, '..');
const express = require('express')
const router = express.Router()

const CategorieService = require(path.join(HOMEDIR, 'services', 'categories-service'));
const categories = require('../models/categorieSchema')
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
    console.log(req.params)
    const {_id} = req.params;
    const categorie = await CategorieService.findOneCategories(_id);
    res.json(categorie)
})


// PUT avec id 

router.put("/:_id", async(req, res)=>{
    const {_id}=req.params

    const {name}=req.body
    categories.findOneAndUpdate({_id},{name})
    .then(categorie=>res.send(categorie))
    .catch(err=>console.log(err))
})

//Delete avec id 

router.delete("/:_id", async(req, res)=>{
    const {_id}=req.params
    const categorie = await CategorieService.deleteOne(_id);
    res.json(categorie)
})

module.exports = router