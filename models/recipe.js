const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
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