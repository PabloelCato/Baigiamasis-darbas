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

app.listen(3000, 'localhost', () => {
    console.log('Server is running');
  });
 
router.post("/login", encodeUrl, async (req, res) => {
    
    const email = req.body.email;
      const password = req.body.password;
  
  try {

      const connection = await mysql.createConnection(mysqlConfig);

    const data = await connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) => {
       res.send({
          test: 1,
        error: false,
        log: results,
      });
      }
    );
    const tabledata = data[0][0];
    console.log(tabledata);
  let bool = await bcryptjs.compareSync(password,tabledata.password);
    await console.log(bool);
    if 
    (tabledata.length === 0) {
      return res.status(400).json({
        error: true,
        message: "Nerasta vartotoju",
      });
      }
  }catch (error) {
    if (Object.keys(error).length === 0) {
      return res.status(503).json({
        error: true,
        message: "User exist",
        log: error,
      });
    }
  }
});

module.exports = router;