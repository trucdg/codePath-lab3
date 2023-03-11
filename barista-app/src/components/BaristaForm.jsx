import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinkJson from "./drinks.json";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const [currentDrink, setCurrentDrink] = useState("");

  const [trueRecipe, setTrueRecipe] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],

    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],

    milk: ["cow", "oat", "goat", "almond", "none"],

    blended: ["yes", "turbo", "no"],
  };

  const onCheckAnswer = () => {
    console.log("Check Answer clicked!");
  };

  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });
    getNextDrink();
  };

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinkJson.drinks.length);

    setCurrentDrink(drinkJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinkJson.drinks[randomDrinkIndex].ingredients);
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>
      <form>
        <h3>Temperature</h3>
        <div className="answer-space">{inputs["temperature"]}</div>
        <RecipeChoices
          label="temperature"
          choices={ingredients["temperature"]}
          checked={inputs["temperature"]}
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </form>

      <form>
        <h3>Syrup</h3>
        <div className="answer-space">{inputs["syrup"]}</div>
        <RecipeChoices
          label="syrup"
          choices={ingredients["syrup"]}
          checked={inputs["syrup"]}
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </form>

      <form>
        <h3>Milk</h3>
        <div className="answer-space">{inputs["milk"]}</div>
        <RecipeChoices
          label="milk"
          choices={ingredients["milk"]}
          checked={inputs["milk"]}
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </form>

      <form>
        <h3>Blended</h3>
        <div className="answer-space">{inputs["blended"]}</div>
        <RecipeChoices
          label="blended"
          choices={ingredients["blended"]}
          checked={inputs["blended"]}
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;
