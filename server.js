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

app.get("/index")

app.get("/login")

app.get("/register")

app.get("/users/login")

app.get("/dashboard/admin")

app.get("/dashboard")

app.get("/users/show/<int:id>")

app.get("/users/edit/<int:id>")

app.get("/users/adminedit/<int:id>")

app.get("/users/edit_users/<int:id>")

app.get("/users/delete/<int:id")

app.get("/logout")

app.get("post/<int:id>")

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );