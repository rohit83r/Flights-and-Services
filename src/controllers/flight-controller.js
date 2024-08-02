const {FlightService} =require('../services/index');
const {ClientErrors,SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        //good practice 
        const flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.flightNumber,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message : "successfully created a flight"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to create a flight",
            err: error
        });  
        
    }
}
const getAll = async (req,res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message : "successfully fetched all the flights"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            meassage:"not able to fetch the flights",
            err: error
        });  
        
    }
}

module.exports={
    create,
    getAll
}