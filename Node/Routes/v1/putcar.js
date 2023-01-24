const express = require("express");
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const parseUrl = require('body-parser');
const { connect } = require("http2");
const { query, response } = require("express");
const { error } = require("console");
const { title } = require("process");
const jwt = require('jsonwebtoken');


const router = express.Router();

router.put("/cars/:id", async (req, res) => {
  
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
  
    try {
      const connect = await mysql.createConnection(mysqlConfig);
    const results = await connect.query("UPDATE cars SET `title`= ?, `price`= ?, `image`= ?, `description`= ?",
    [title, price, image, description],
  
    (error, response) => response);
      const databaseResults = results[0];
  
      if (databaseResults.affectedRows > 0) {
        (
          res.send({
            error: false,
            stats: databaseResults,
          })
        );
      }
  
      connect.end();
      return;
    } catch (error) {
      console.log(error);
      res.send({
        error: true,
        stats: JSON.stringify(error),
      });
    }
  });

  module.exports = router;