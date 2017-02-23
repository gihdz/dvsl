import express from 'express';
// var stormpath = require('express-stormpath');
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

// app.use(stormpath.init(app, {
//   // Optional configuration options.
//   // web: {
//   //   produces: ['application/json']
//   // }
// }));
// Setup Express Application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static('./build'));

export default app;