const { CityService } = require("../services/index");

const cityService =new CityService();

/**
 * POST
 *  data -> req.body
 */


const  create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"succesfullt created a city",
            err: {}
        });   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to create a city",
            err: error
        });   
    }
}
//delete -> /city/:id
const destroy =async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"succesfullt deleted a city",
            err: {}
        });   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to delete a city",
            err: error
        });
    }
    
}
//GET -> /city/:id
const get =async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:"succesfullt fetched a city",
            err: {}
        });   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to get a city",
            err: error
        });   
    }
    
}
//PATCH -> /city/:id -> req.body
const update =async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"succesfullt updated a city",
            err: {}
        });   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to update a city",
            err: error
        });   
    }
    
}

const getAll = async (req,res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data:cities,
            success:true,
            message:"succesfullt fetched all citie",
            err: {}
        });   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to fetch all the cities",
            err: error
        });
        
    }
}




module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}