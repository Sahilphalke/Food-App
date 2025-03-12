import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import FoodList from "./Components/FoodList";
import OuterContainer from "./Components/OuterContainer";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(1);
  return (
    <>
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <OuterContainer>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodId={setFoodId}
            setFoodData={setFoodData}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;
