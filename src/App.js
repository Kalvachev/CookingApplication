import React from 'react';
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Chicken',
    servings: 7,
    cookTime: '1:30',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken"
  },
  {
    id: 2,
    name: 'Pork',
    servings: 6,
    cookTime: '0:55',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork"
  }
]

export default App;
