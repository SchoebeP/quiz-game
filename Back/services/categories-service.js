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
            return err;
        }
    },

    findOneCategories: async function(query){
        let {_id} = query;
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
    }
}

module.exports = exposeServices;