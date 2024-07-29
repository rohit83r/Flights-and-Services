const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index.js');

const setUpAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.use('/api',ApiRoutes); 

    const port = PORT || 3000; // Default to port 3000 if PORT is not set
    console.log(`Attempting to start server on port: ${port}`);

    app.listen(port, async () => {
        console.log(`Server started at ${port}`);
    });
};

setUpAndStartServer();
