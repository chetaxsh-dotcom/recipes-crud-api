const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: [String],  //  THIS MUST BE AN ARRAY - [String] NOT String
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    default: 1,
  },
  cookTime: {
    type: Number,
    default: 30,
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);