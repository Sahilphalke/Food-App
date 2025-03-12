import React from "react";
import FoodItem from "./FoodItem";

function FoodList({ foodData, setFoodData, setFoodId }) {
  return (
    <>
      <div className="">
        <div className="">
          {foodData.map((food) => (
            <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodList;
