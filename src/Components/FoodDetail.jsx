import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faKitchenSet } from "@fortawesome/free-solid-svg-icons";

function FoodDetail({ foodId }) {
  const [foodRecipe, setFoodRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://dummyjson.com/recipes/${foodId}`;

  useEffect(() => {
    async function fetchFoodData() {
      const res = await fetch(URL);
      const data = await res.json();
      setFoodRecipe(data);
      setIsLoading(false);
    }
    fetchFoodData();
  }, [foodId, URL]);

  return (
    <div className="" style={{ width: "450px" }}>
      <h6 className="text-center">Food Recipe</h6>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-100">
          <h6 className="text-center">{foodRecipe.name}</h6>
          <li className="list-group-item border-0 text-center">
            <img
              src={foodRecipe.image}
              alt="wait for image"
              className="img-fluid img-thumbnail"
              style={{ width: "300px", height: "150px" }}
            />
          </li>
          <div className="d-flex">
            <ul className="list-group  w-100 ms-5">
              <h6 className="fst-italic">
                Ingredients - <FontAwesomeIcon icon={faKitchenSet} />
              </h6>
              {isLoading
                ? "Data Loading... "
                : foodRecipe.ingredients.map((item, index) => (
                    <li className="list-group-item border border-0" key={index}>
                      ➡️
                      {item}
                    </li>
                  ))}
            </ul>
            <ul className="list-group w-100">
              <h6 className="fst-italic">
                Instruction - <FontAwesomeIcon icon={faUtensils} />
              </h6>
              {isLoading
                ? "Data Loading... "
                : foodRecipe.instructions.map((instruction, index) => (
                    <li className="list-group-item border border-0" key={index}>
                      ➡️
                      {instruction}
                    </li>
                  ))}
            </ul>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-center">
            <h6>
              Prep Time Minutes :
              <span className="text-warning">
                {" "}
                {foodRecipe.prepTimeMinutes} ⌛
              </span>
            </h6>
            <h6>
              Cook Time Minutes :
              <span className="text-warning">
                {" "}
                {foodRecipe.cookTimeMinutes} ⏳
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
