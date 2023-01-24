const express = require("express");
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');
const Joi = require('joi');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const parseUrl = require('body-parser');
const { connect } = require("http2");
const { query, response } = require("express");
const { error } = require("console");
const { title } = require("process");
const jwt = require('jsonwebtoken');

app.use(express.json());   
app.use(cors());

dotenv.config();

let token = process.env.TOKEN_SECRET ;
console.log(token);

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'brita123',
    database: 'new_schema',
    port: '3306',
};

app.listen(3001, 'localhost', () => {
    console.log('Server is running');
  });
  
  let encodeUrl = parseUrl.urlencoded({ extended: false });


app.post("/register", encodeUrl, async (req, res) => {
    
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

  app.post("/login", encodeUrl, async (req, res) => {
    
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

app.get('/cars', async (req, res) => {
  const limit = Number(req.query.limit);
  const defaultLimit = 60;
  try {
        const connect = await mysql.createConnection(mysqlConfig);
        if (limit && limit < defaultLimit) {
        const results = await connect.query(
            'SELECT * FROM cars LIMIT ?',
            [limit],
            (error, response) => response,
          );
          res.send(results[0]);
        } else {
          const results = await connect.query(
            'SELECT * FROM cars LIMIT ?',
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

app.post('/cars', async (req, res) => {
const title = req.body.title;
const image = req.body.image;
const price = req.body.price;
const description = req.body.description;

try{

  const connect = await mysql.createConnection(mysqlConfig);
  const results = await connect.query('INSERT INTO cars (title, price, image, description) VALUES (?, ?, ?, ?)', 
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

app.delete('/cars/:id', async (req, res) => {
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

app.put("/cars/:id", async (req, res) => {
  
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
        
app.post('/special', async (req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  
  try{
  
    const connect = await mysql.createConnection(mysqlConfig);
    const results = await connect.query('INSERT INTO special (title, price, image, description) VALUES (?, ?, ?, ?)', 
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
  
  app.delete('/special/:id', async (req, res) => {
    const deletespecialCarId = Number(req.params.id);
    try {
      const connect = await mysql.createConnection(mysqlConfig);
  
      const results = await connect.query('DELETE FROM special WHERE id = ?', [deletespecialCarId], (error, response) => response);
  
      console.log(results, deletespecialCarId);
  
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

  app.get('/special', async (req, res) => {
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






// const { login, register } = require('./routes/v1/');

// app.use(express.json());
// app.use(cors());

// app.use('/v1/register/', register);
// app.use('/v1/login/', login);

// app.get('/', (req, res) => {
//   res.send({ msg: 'Server is running' });
// });