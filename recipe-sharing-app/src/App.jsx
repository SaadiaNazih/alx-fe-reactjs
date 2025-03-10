import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <AddRecipeForm />
        <RecipeList />
        <Switch>
          <Route path="/recipes/:recipeId" component={RecipeDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
