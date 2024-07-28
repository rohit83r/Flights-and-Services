const { City } = require("../models/city"); // Adjust the import according to your project structure

class CityRepository {
    async createCity(data) {
        try {
            const city = await City.findOne({ where: { name: data.name } });
            if (city) {
                console.log('City already exists:', city.name);
                return city;
            }
            const newCity = await City.create(data);
            return newCity;
        } catch (error) {
            console.error('Error creating city in repository:');
            throw error; // Re-throw the error to be caught in the calling function
        }
    }
}

module.exports = CityRepository;
