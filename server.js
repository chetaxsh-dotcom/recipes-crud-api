const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const recipeRoutes = require('./src/routes/recipeRoutes');

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Recipe API is running...');
});

app.use('/api', recipeRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});