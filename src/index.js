const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig.js');
const CityRepository = require("./repository/city-repository.js");

const setUpAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const port = PORT || 3000; // Default to port 3000 if PORT is not set
    console.log(`Attempting to start server on port: ${port}`);

    app.listen(port, async () => {
        console.log(`Server started at ${port}`);
        const repo = new CityRepository();
        try {
            await repo.createCity({ name: "New Delhi" });
            console.log('City created successfully');
        } catch (error) {
            console.error('Error creating city:', error);
        }
    });
};

setUpAndStartServer();