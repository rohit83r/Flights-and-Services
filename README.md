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
