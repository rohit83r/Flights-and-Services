#Welcome to Flights Service

##project setup

-clone the project on your local

-Execute `npm install` on the same path as of your directory of the downloaded project

-Create a `.env` file in the root directory and add the `config,json` and then add the following environment variables

    - `PORT=3000`

-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password":<YOUR_DB_PASSWORD>,
    "database": "Flights_and_Services",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
-once you've added  your db config as listed above ,go to the src folder from your terminal and execute `npx sequelize db:create`



`npx sequelize db:migrate`


##DB DESIGN
 -Airplane Table

 -Flights Table  

 -Airport Table

 -City Table



 - A flight belongs to an airplane but one airplane can be used in multiple flights.
 - A city has many airports but one airport belongs to a city.
 - One airport can have many flights, but a flight belongs to one airport.



 ##Tables 

 ### City -> id,name,created_at,updated_at
 ### Airport -> id,name,address,city_id,created_at, updated_At
     Relationship ->City has many airports and Airports belongs to a city (one to many)


```
npx sequelize model:generate --name Airport --attributes name:String,address:string,cityId:integer
```
