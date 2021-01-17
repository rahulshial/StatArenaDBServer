const express = require("express");
const Router = express.Router();
const sqlConnection = require('../lib/db.js');
Router.use(express.json());

Router.get('/dropzone', (req, res) => {
    sqlConnection.query('SELECT * FROM drop_zones ORDER BY RAND() LIMIT 1;', (error, results) => {
    if (error) {
      return;
    }
    console.log("Server Dropzone query: ", results);
    res.send(results);
  });
});

Router.get('/rules', (req, res) => {
  sqlConnection.query('SELECT * FROM special_rules ORDER BY RAND() LIMIT 1;', (error, results) => {
    if (error) {
      return;
    }
    console.log("Server Rules query: ", results);
    res.send(results);
  });
});

Router.get('/gun', (req, res) => {
  sqlConnection.query('SELECT * FROM guns ORDER BY RAND() LIMIT 1;', (error, results) => {
    if (error) {
      return;
    }
    console.log("Server Weapon query: ", results);
    res.send(results);
  });
});

module.exports = Router;