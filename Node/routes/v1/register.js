const express = require("express");
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');
const Joi = require('joi');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const parseUrl = require('body-parser');

const router = express.Router();

let encodeUrl = parseUrl.urlencoded({ extended: false });


app.use(express.json());
app.use(cors());

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'brita123',
    database: 'new_schema',
    port: '3306',
};


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
         res.send({
            error: false,
            log: results,
          });
        }
      );
      connection.end();
    }catch (error) {
      if (Object.keys(error).length === 0) {
        return res.status(503).json({
          error: true,
          message: "Klaida kode",
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