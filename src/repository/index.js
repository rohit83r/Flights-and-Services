const AirplaneRepository = require("./airplane-repository");
const AiportRepository = require("./airport_repository");
const CrudRepository = require("./crud-repository");
const FlightRepository = require("./flight_repository");

module.exports ={
    CityRepository: require("./city-repository"),
    FlightRepository:require('./flight_repository'),
    AirplaneRepository:require('./airplane-repository'),
    CrudRepository:require('./crud-repository'),
    AirportRepository:require('./airport_repository')
}