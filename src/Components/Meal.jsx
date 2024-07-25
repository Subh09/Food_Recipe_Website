import React, { useEffect, useState } from "react";
import MealItem from "./MealItmes";
import RecipeIndex from "./RecipeIndex";
const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setshow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setshow(true);
      });
  }, [url]);
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="main">
        <div className="navbar">
          <a href="/RegistrationForm">RegistrationForm</a>
        </div>
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            tempore unde sed ducimus voluptates illum!
          </h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="container">
          {show ? <MealItem data={item} /> : "Not found"}
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={setIndex} />
        </div>
      </div>
    </>
  );
};

export default Meal;
