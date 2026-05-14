const FoodCard = ({ food }) => {
  return (
    <div className="card bg-base-100 border border-orange-400 shadow-sm">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{food.dish_name}</h2>
        <p>{food.description}</p>
        <p>{food.category}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
