# Flights and Services Management System

## Overview

The Flights and Services Management System is a robust Node.js microservice designed to manage key components of an airline's operations, including cities, airports, airplanes, and flights. The service is modular, allowing for easy extension and maintenance, and it integrates seamlessly with other services within an airline management ecosystem.

## Features

- **City Management**: Create, update, delete, and view city information.
- **Airport Management**: Manage airport details and their relationships with cities.
- **Airplane Management**: Handle airplane data, including type, capacity, and status.
- **Flight Management**: Manage flights, including scheduling, routing, and airplane assignments.
- **Database Integration**: Uses Sequelize ORM for managing relational data.
- **Error Handling**: Structured error management with custom error codes and messages.
- **Seeding**: Prepopulate the database with initial data for cities, airports, and airplanes.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Flights-and-Services-master
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the project to store environment variables. Example:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=flights_services_db
JWT_SECRET=your_jwt_secret_key
```

Replace placeholders with your actual database credentials and JWT secret.

## Database Setup

Ensure your database is set up and running. The service uses Sequelize ORM, and the following commands can be used to manage the database:

1. **Run migrations**:
   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Seed the database**:
   ```bash
   npx sequelize-cli db:seed:all
   ```

This will create the necessary tables and populate them with initial data.

## Running the Application

To start the server, use the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 3000). The API can then be accessed at `http://localhost:3000`.

## API Endpoints

### **City Management**

- **POST `/api/v1/cities`**
  - Create a new city.
  - **Request Body**:
    ```json
    {
      "name": "New York",
      "countryCode": "USA"
    }
    ```

- **GET `/api/v1/cities/:id`**
  - Retrieve details of a specific city by its ID.

- **PUT `/api/v1/cities/:id`**
  - Update city details.
  - **Request Body**:
    ```json
    {
      "name": "San Francisco"
    }
    ```

- **DELETE `/api/v1/cities/:id`**
  - Delete a specific city by its ID.

### **Airport Management**

- **POST `/api/v1/airports`**
  - Create a new airport.
  - **Request Body**:
    ```json
    {
      "name": "John F. Kennedy International Airport",
      "cityId": 1
    }
    ```

- **GET `/api/v1/airports/:id`**
  - Retrieve details of a specific airport by its ID.

- **PUT `/api/v1/airports/:id`**
  - Update airport details.
  - **Request Body**:
    ```json
    {
      "name": "LaGuardia Airport"
    }
    ```

- **DELETE `/api/v1/airports/:id`**
  - Delete a specific airport by its ID.

### **Airplane Management**

- **POST `/api/v1/airplanes`**
  - Add a new airplane.
  - **Request Body**:
    ```json
    {
      "model": "Boeing 747",
      "capacity": 416
    }
    ```

- **GET `/api/v1/airplanes/:id`**
  - Retrieve details of a specific airplane by its ID.

- **PUT `/api/v1/airplanes/:id`**
  - Update airplane details.
  - **Request Body**:
    ```json
    {
      "model": "Airbus A380"
    }
    ```

- **DELETE `/api/v1/airplanes/:id`**
  - Delete a specific airplane by its ID.

### **Flight Management**

- **POST `/api/v1/flights`**
  - Schedule a new flight.
  - **Request Body**:
    ```json
    {
      "airplaneId": 1,
      "departureAirportId": 1,
      "arrivalAirportId": 2,
      "departureTime": "2024-08-11T14:00:00.000Z",
      "arrivalTime": "2024-08-11T18:00:00.000Z",
      "price": 300
    }
    ```

- **GET `/api/v1/flights/:id`**
  - Retrieve details of a specific flight by its ID.

- **PUT `/api/v1/flights/:id`**
  - Update flight details.
  - **Request Body**:
    ```json
    {
      "price": 350
    }
    ```

- **DELETE `/api/v1/flights/:id`**
  - Cancel a specific flight by its ID.

## Project Structure

Here's a high-level overview of the project's structure:

```
Flights-and-Services-master/
├── src/
│   ├── config/
│   │   ├── config.json                # Database configuration
│   │   └── serverConfig.js            # Server configuration
│   ├── controllers/
│   │

   ├── airport-controller.js      # Airport-related request handlers
│   │   ├── city-controller.js         # City-related request handlers
│   │   └── flight-controller.js       # Flight-related request handlers
│   ├── middlewares/
│   │   ├── flight-middlewares.js      # Flight-specific middleware
│   │   └── index.js                   # Middleware index
│   ├── migrations/
│   │   ├── 20240726100635-create-city.js  # Migration for City table
│   │   ├── 20240730071353-create-airport.js # Migration for Airport table
│   │   ├── 20240801152148-create-airplane.js # Migration for Airplane table
│   │   └── 20240801175937-create-flights.js  # Migration for Flights table
│   ├── models/
│   │   ├── airplane.js                # Airplane model
│   │   ├── airport.js                 # Airport model
│   │   ├── city.js                    # City model
│   │   ├── flights.js                 # Flight model
│   │   └── index.js                   # Sequelize model initialization
│   ├── repository/
│   │   ├── airplane-repository.js     # Airplane repository
│   │   ├── airport_repository.js      # Airport repository
│   │   ├── city-repository.js         # City repository
│   │   ├── crud-repository.js         # Generic CRUD repository
│   │   └── flight_repository.js       # Flight repository
│   ├── routes/
│   │   ├── index.js                   # Main router
│   │   └── v1/index.js                # Version 1 API routes
│   ├── seeders/
│   │   ├── 20240731074227-add-airports.js  # Airport seed data
│   │   └── 20240801152728-add-airplanes.js # Airplane seed data
│   ├── services/
│   │   ├── airport-services.js        # Airport-related business logic
│   │   ├── city-services.js           # City-related business logic
│   │   ├── crud-services.js           # Generic CRUD services
│   │   ├── flight-services.js         # Flight-related business logic
│   │   └── index.js                   # Service index
│   └── utils/
│       ├── error-codes.js             # Error codes
│       └── helper.js                  # Helper functions
├── .gitignore                         # Git ignore file
├── package.json                       # Project metadata and dependencies
├── package-lock.json                  # Dependency lock file
└── README.md                          # Project documentation 
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.
