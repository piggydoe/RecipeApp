import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './comp/Recipe';

const App = () => {
const [recipes, setRecipes] = useState([]);
const KEY = "";
const ID = "";
const [search, setSearch] = useState("");
const [query, setQuery] = useState("stew");
useEffect(() => {
	getRecipes();
}, [query])
const getRecipes = async () => {
	const response = await fetch
		(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	// console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App bg-slate-100">
	<form className="search-form pb-5 pt-5" onSubmit={getSearch} >
		<input className="search-bar rounded-md" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button bg-green-400 text-white rounded-md p-2 w-15 mx-3" type="submit" >
			Search
		</button>
	</form>

  <div class="grid grid-cols-2 gap-4">
    {recipes.map(recipe => (
      <Recipe key={recipe.recipe.label}
        title={recipe.recipe.label}
        label={recipe.recipe.label}
        image={recipe.recipe.image}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
      />
    ))}

</div>

	</div>
);
}

export default App;
