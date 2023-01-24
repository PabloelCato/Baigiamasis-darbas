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

let encodeUrl = parseUrl.urlencoded({ extended: false });
const router = express.Router();

router.post("/register", encodeUrl, async (req, res) => {
    
    const firstname =  req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
    
    try {

      const encodedPassword = await bcryptjs.hashSync(password);
      const connection = await mysql.createConnection(mysqlConfig);
      connection.query(
        "INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)",
        [firstname,lastname,email,encodedPassword],
        (error, results) => {
return results;
        }
      );
      console.log(results);
    }catch (error) {
      if (Object.keys(error).length === 0) {
        return res.status(503).json({
          error: true,
          message: "Vartotojas užregistruotas",
          log: error,
        });
      }
      return res.status(400).json({
        error: true,
        message: "Neteisingas formatas",
        log: error,
      });
    }
});

module.exports = router;