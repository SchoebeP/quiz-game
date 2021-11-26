const path = require('path');
const HOMEDIR = path.join(__dirname, '..');
const Categories = require(path.join(HOMEDIR, 'models','categorieSchema'));

const exposeServices = {
    findAllCategories: async function(query){
        try{
            const allC = await Categories.find().exec();
            return allC;
        }
        catch(err){
            res.status(500).send({ message: err.message || 'probleme avec la recuperation des categories' });
        }
    },

    findOneCategories: async function(_id){
        try {
            let cat = await Categories.findOne({_id}).exec();
            return cat;
            
        } catch (error) {
            return error;
            
        }
    },
    saveOne:async function(data){
        let oneC = new Categories(data);
        try{
            let newCategory = await oneC.save();
            return newCategory;
        }catch(error) {
            return error;
        }
    },
    deleteOne: async function(_id) {
        try{
          deleteCat=  await Categories.findByIdAndRemove({_id}).exec();
            return deleteCat;
        }
        catch(error) {
            res.status(500).send({ message: error.message || 'probleme avec la supression' });

        }
    },


    
}

module.exports = exposeServices;