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

router.delete('/cars/:id', async (req, res) => {
    const deleteCarId = Number(req.params.id);
    try {
      const connect = await mysql.createConnection(mysqlConfig);
  
      const results = await connect.query('DELETE FROM cars WHERE id = ?', [deleteCarId], (error, response) => response);
  
      console.log(results, deleteCarId);
  
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