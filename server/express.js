"use strict";
const url = require('url');
const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');
const config = require('./config');
const cors = require("cors");
const app = express();

app.use(jsonParser);
app.use("*", cors());

app.use("/api/v1/items", (req, res) => {
  const queryString = url.parse(req.url);
  const requestUrl = `${config.API_URL}?${queryString.query}`;
  console.log('called', requestUrl);
  fetch(requestUrl)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(e => console.log('Error', e))
});

app.use("*", (req, res) => {
  res.status(404).end('Not Found');
});

process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
  })
  .on("uncaughtException", err => {
    console.error(err, "Uncaught Exception thrown");
    process.exit(1);
  });

module.exports = app;
