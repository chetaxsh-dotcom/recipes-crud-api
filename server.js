const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const recipeRoutes = require('./src/routes/recipeRoutes');  //  Add src/
const connectDB = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', recipeRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});