const { flights } =require('../models/index'); 
const { Op } =require('sequelize');

class FlightRepository {
    #createFilter(data){
        let filter ={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter =[];
        if(data.minPrice){
            priceFilter.push({price : {[Op.gte]:data.minPrice}});
            //Object.assign(filter, {price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price : {[Op.lte]:data.maxPrice}});
            //Object.assign(filter, {price:{[Op.lte]:data.maxPrice}});
        }
        // if(data.minPrice && data.maxPrice ){
        //     Object.assign(filter, {
        //         [Op.and]:[
        //             { price:{[Op.lte]:data.maxPrice} },
        //             { price:{[Op.gte]:data.minPrice} }

        //         ]
                
        //     });
        // }

        Object.assign(filter, {[Op.and]:priceFilter});
        return filter;

    }
    async createFlight(data){
        try {
            const flight = await flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async getFlight(flightId){
        try {
            const flight = await flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
        }

    }
    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            
            const flight = await flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async updateFlight(flightId,data){
        try {
            await flights.update(data,{
                where:{
                    id:flightId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};    
        }
    }
}

module.exports=FlightRepository;

/**
 * {
 *     where:{
 *          arrivalAirportId:2,
 *          departureAirportId:5,
 *          price: {[Op .gte] :4000}
 *          
 *     }
 * 
 * 
 * 
 * }
 */