const Recipe = require('../models/Recipe');

// CREATE
const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, servings, cookTime } = req.body;

    if (!name || !ingredients || !instructions) {
      return res.status(400).json({ 
        message: 'Name, ingredients, and instructions are required' 
      });
    }

    const newRecipe = new Recipe({
      name,
      ingredients,
      instructions,
      servings,
      cookTime,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json({ 
      message: 'Recipe created successfully',
      data: savedRecipe 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating recipe',
      error: error.message 
    });
  }
};

// READ ALL
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ 
      message: 'All recipes retrieved',
      data: recipes 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving recipes',
      error: error.message 
    });
  }
};

// READ BY ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ 
      message: 'Recipe retrieved',
      data: recipe 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving recipe',
      error: error.message 
    });
  }
};

// UPDATE
const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(200).json({ 
      message: 'Recipe updated successfully',
      data: updatedRecipe 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error updating recipe',
      error: error.message 
    });
  }
};

// DELETE
const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(200).json({ 
      message: 'Recipe deleted successfully',
      data: deletedRecipe 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error deleting recipe',
      error: error.message 
    });
  }
};

module.exports = { 
  createRecipe, 
  getAllRecipes, 
  getRecipeById, 
  updateRecipe, 
  deleteRecipe 
};