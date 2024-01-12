import express from "express";
import { addrecipe, deleteRecipe, getRecipe, updateRecipe } from "../Controllers/recipe.js";

export const RecipeRouter =express.Router();

RecipeRouter.post('/addrecipe',addrecipe);
RecipeRouter.get('/getrecipe',getRecipe);
RecipeRouter.put('/update/:id',updateRecipe)
RecipeRouter.delete('/delete/:id',deleteRecipe)