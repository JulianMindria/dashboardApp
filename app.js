const express = require('express');
const cors = require('cors');
const app = express();
const routers = require('./src/routes/index');
const db = require('./src/config/configdb');
require('dotenv').config();

// Middleware setup
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes setup
app.use(routers);

// Database connection
db.connect()
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.error("Can't connect to the database:", e);
  });
