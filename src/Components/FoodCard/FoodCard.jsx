export function FoodCard({ food }) {
  return (
    <div key={food.id} className="food-card card">
      <img src={food.img} alt="" className="food-img" />
      <div>
        <h3>{food.name}</h3>
        <p>{food.dsc}</p>
        <p>{food.type}</p>
      </div>
    </div>
  );
}
