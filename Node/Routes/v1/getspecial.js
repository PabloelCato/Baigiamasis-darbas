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

router.get('/special', async (req, res) => {
    const limit = Number(req.query.limit);
    const defaultLimit = 60;
    try {
          const connect = await mysql.createConnection(mysqlConfig);
          if (limit && limit < defaultLimit) {
          const results = await connect.query(
              'SELECT * FROM special LIMIT ?',
              [limit],
              (error, response) => response,
            );
            res.send(results[0]);
          } else {
            const results = await connect.query(
              'SELECT * FROM special LIMIT ?',
              [defaultLimit],
              (error, response) => response,
            );
            res.send(results[0]);
          }
          connect.end();
          return;
        } catch (error) {
          console.log(error);
          res.send(JSON.stringify(error));
        }
      });

      module.exports = router;