const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000 // Default to port 3000 if PORT is not set
};
