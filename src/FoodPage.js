import { useParams } from "react-router-dom";

function FoodPage({ data }) {
  const { name } = useParams();

  const currentData = data.find((food) => food.strMeal === name);

  console.log(currentData);

  if (!currentData) {
    return <div>Loading...</div>; // currentData henüz yüklenmemişse bir yükleme mesajı gösterin
  }
  return (
    <div className="food-page-container">
      <div
        style={{
          backgroundImage: `url(${currentData.strMealThumb})`,
        }}
        className="food-image"
      ></div>
    </div>
  );
}

export default FoodPage;
