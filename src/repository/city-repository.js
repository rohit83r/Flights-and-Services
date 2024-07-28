const { City } = require('../models/city'); // Adjust according to your structure

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
            console.error('Error creating city in repository:', error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            const result = await City.destroy({
                where: {
                    id: cityId
                }
            });
            if (result === 0) {
                console.log('No city found with the provided ID');
            } else {
                console.log('City deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting city in repository:', error);
            throw error;
        }
    }
}

module.exports = CityRepository;
