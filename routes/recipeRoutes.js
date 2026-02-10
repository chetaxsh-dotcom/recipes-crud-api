const express = require("express");
const router = express.Router();

const {
  getRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require("../controllers/recipeController");

// GET all recipes
router.get("/recipes", getRecipes);

// GET recipe by ID
router.get("/recipes/:id", getRecipeById);

// POST new recipe
router.post("/recipes", createRecipe);

// UPDATE recipe
router.put("/recipes/:id", updateRecipe);

// DELETE recipe
router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
