const { City } = require('../models/index'); // Adjust according to your structure

class CityRepository {
    async createCity({name}) {
        try{
            const city =await City.create( {name });
            return city;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data) {
        try {
            //the below approach also works but will not return udpated object
            // if u are using postgre then returning true can be used,else not
            // const city =await City.update(data,{
            //     where:{
            //         id:cityId
            //     },
            //          returning: true
            // })

            //for getting updated data in mysql  we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};            
        }

    }
    
    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
                
        }catch (error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    
}

module.exports = CityRepository;
