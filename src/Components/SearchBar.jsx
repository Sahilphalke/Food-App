import React, { useEffect, useState } from "react";
import "../Index.css";
import "bootstrap5/src/css/bootstrap.min.css";

function SearchBar({ foodData, setFoodData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [originalFoodData, setOriginalFoodData] = useState([]);

  const URL = "https://dummyjson.com/recipes";

  useEffect(() => {
    async function fetchFoodData() {
      const res = await fetch(URL);
      const data = await res.json();
      setFoodData(data.recipes);
      setOriginalFoodData(data.recipes);
    }
    fetchFoodData();
  }, [setFoodData]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFoodData(originalFoodData);
    } else {
      const filteredData = originalFoodData.filter((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFoodData(filteredData);
    }
  }, [searchQuery, originalFoodData, setFoodData]);

  function onHandleForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="container-fluid pt-1 pb-1 p-0 sticky-top ">
        <div className="container">
          <div
            className="container w-50  d-flex justify-content-between align-items-center rounded-pill p-2 placeholder-white"
            style={{ backgroundColor: "#56021F" }}
          >
            <div className="logoImg" style={{ width: "7%" }}>
              <img
                className="img-fluid"
                src="/Centerimage.png"
                alt="wait for image"
                style={{ animation: "rotateAnimation 10s linear infinite" }}
              />
            </div>
            <div className="">
              <form action="" onSubmit={onHandleForm}>
                <div>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    className="form-control rounded-pill border border-0 text-center "
                    placeholder="Delicious"
                    style={{ backgroundColor: "#56021F", color: "white" }}
                  />
                </div>
              </form>
            </div>
            <div className="logoImg d-flex gap-2" style={{ width: "7%" }}>
              <img
                className="img-fluid"
                src="/Group2.png"
                alt="wait for image"
                style={{ animation: "rotateAnimation2 10s linear infinite" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
