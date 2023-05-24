# E-Commerce Back End

The E-Commerce Back End is a project aimed at building the back end for an e-commerce website using the latest technologies. It leverages Express.js, Sequelize, and MySQL to create a functional API that enables interaction with a database.

## Summary

The E-Commerce Back End accomplishes the following:

- Provides an Express.js API that can be used to manage an e-commerce website's data.

- Uses Sequelize, an Object-Relational Mapping (ORM) library, to interact with a MySQL database.

- Implements database models and associations using Sequelize to define the structure and relationships of the e-commerce data, such as categories, products, and tags.

- Allows the connection to the database by providing the necessary configuration details (database name, MySQL username, and password) through an environment variable file.

- Enables the creation of a development database and population of test data by running schema and seed commands.

- Starts the server and syncs the Sequelize models with the MySQL database when the application is invoked.

- Provides API routes for retrieving data (GET requests) in a formatted JSON format, including categories, products, and tags.

- Supports API routes for creating, updating, and deleting data (POST, PUT, and DELETE requests) using tools like Insomnia for testing and interacting with the API.

By building the E-Commerce Back End, developers can enhance their understanding of the fundamental architecture behind e-commerce platforms. This project demonstrates the use of modern technologies to create a robust back end that can handle data management for an e-commerce website.
