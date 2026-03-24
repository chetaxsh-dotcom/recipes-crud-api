const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const recipeRoutes = require('./routes/recipeRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Routes
app.use('/api', recipeRoutes);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});