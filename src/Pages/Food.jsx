import { useEffect, useState } from "react";
import { fetchFood } from "../Service/Fetch/Fetch";
import { FoodCard } from "../Components/FoodCard/FoodCard";

export function Food() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchFood().then((foods) => setFoodItems(foods));
  }, []);

  return (
    <article className="page-article">
      <h2>Food Menu </h2>
      {foodItems.length > 0 &&
        foodItems.map((food) => <FoodCard food={food} />)}
    </article>
  );
}
