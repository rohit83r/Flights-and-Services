const { FlightRepository,AirplaneRepository }= require('../repository/index');
const { comparetime } = require('../utils/helper');
class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!comparetime (data.arrivalTime,data.departureTime)){
                throw{error:"Arrival time cannot be less than departure time"}
            }
            const airplane =await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight =await this.flightRepository.createFlight({
                ...data, totalseats:airplane.capacity
            })
            return flight;
            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getAllFlightData(data){
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
            
        }

    }
}

module.exports=FlightService;
/**
 * {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * totalseats->airplane,
 * price,
 * boardingGate
 * }
 */

