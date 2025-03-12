import React from "react";

function FoodItem({ food, setFoodId }) {
  return (
    <>
      <div className="d-inline-flex p-1 d-flex justify-content-center align-items-center">
        <div className="card" style={{ width: "200px", height: "310px" }}>
          <img
            className="card-img-top img-fluid"
            src={food.image}
            alt="wait for image"
          />
          <div className="card-body text-center">
            <h6 className="card-title fst-italic text-center">{food.name}</h6>
            <button
              className="btn text-white"
              style={{ backgroundColor: "#D91656" }}
              onClick={() => setFoodId(food.id)}
            >
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
