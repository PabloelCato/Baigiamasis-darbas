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


router.post("/login", encodeUrl, async (req, res) => {
    
    const email = req.body.email;
      const password = req.body.password;
  
  try {
      const connection = await mysql.createConnection(mysqlConfig);

    const data = await connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) => {
return results;

      }
    );
    const tabledata = data[0][0];
    console.log(tabledata);
    if (tabledata)
    return res.json(tabledata);
  let bool = await bcryptjs.compareSync(password,tabledata.password);
    await console.log(bool);
    return res.status(400).json({
        error: true,
        message: "Nerasta vartotoju",
      });
      }catch (error) {
    if (Object.keys(error).length === 0) {
      return res.status(503).json({
        error: false,
        message: "User doesn't exist",
        log: error,
      });
    }if (bool) {
       jwt.sign({
           data: firstname}, '09f26e402586e2faa8da4c98a35f1b20d6b033c60', { expiresIn: '1h' });
  }
  await connection.end();
}
});

module.exports = router;