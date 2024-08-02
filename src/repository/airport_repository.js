const CrudRepository = require('./crud-repository');
const { Airport } =require('../models/index');

class AiportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports=AiportRepository;