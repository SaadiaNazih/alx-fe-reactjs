// src/components/RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === parseInt(recipeId)));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};

export default RecipeDetails;
