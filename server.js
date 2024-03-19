const express = require("express");
const app = express();
const port = 8000;
const swaggerUi = require('swagger-ui-express');
// const fs = require("fs")
// const YAML = require('yaml')
// const file  = fs.readFileSync('./swagger.yaml', 'utf8')
// const swaggerDocument = YAML.parse(file)
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Dashboard',
    version: '1.0.0',
    description: 'Dashboard endpoint listings!!'
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./server.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



/**
 * @swagger
 * /index:
 *   get:
 *     summary: loads the index page
 *     description: loads the index page
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/index")

/**
 * @swagger
 * /login:
 *   get:
 *     summary: login page
 *     description: login page
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/login")

/**
 * @swagger
 * /register:
 *   get:
 *     summary: register page
 *     description: register page
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/register")

/**
 * @swagger
 * /users/login:
 *   get:
 *     summary: logs the users in
 *     description: logs the users in
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/users/login")

/**
 * @swagger
 * /dashboard/admin:
 *   get:
 *     summary: gives the admin version of the dashboard
 *     description: gives the admin version of the dashboard
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/dashboard/admin")

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: gives the default dashboard page
 *     description: gives the default dashboard page
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/dashboard")

/**
 * @swagger
 * /users/show/<int:id>:
 *   get:
 *     summary: Shows the user profile
 *     description: Shows the user profile
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/users/show/<int:id>")

/**
 * @swagger
 * /users/edit/<int:id>:
 *   get:
 *     summary: loads the edit.html page for the user
 *     description: loads the edit.html page for the user
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/users/edit/<int:id>")

/**
 * @swagger
 * /users/adminedit/<int:id>:
 *   get:
 *     summary: loads the adminedit.html
 *     description: loads the adminedit.html
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/users/adminedit/<int:id>")

/**
 * @swagger
 * /users/edit_users/<int:id>:
 *   get:
 *     summary: Edits the users info
 *     description: Edits the users info
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/users/edit_users/<int:id>")

/**
 * @swagger
 * /users/delete/<int:id:
 *   get:
 *     summary: Deletes the user selected
 *     description: Deletes the user selected
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/users/delete/<int:id")

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logs out the user
 *     description: Logs out the user
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("/logout")

/**
 * @swagger
 * /post/<int:id>:
 *   get:
 *     summary: Posts the users comments
 *     description: Posts the users comments
 *     produces: 
 *      - application/json
 *     responses:
 *       200:
 *        description: OK
*/

app.get("post/<int:id>")



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );