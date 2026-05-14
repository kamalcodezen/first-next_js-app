"use client";

import FoodCard from "@/components/ui/FoodCard";
import { useEffect, useState } from "react";

const FoodPage = () => {
  const [loading, setLoading] = useState(false);

  // original data
  const [allFoods, setAllFoods] = useState([]);

  // filtered data
  const [foods, setFoods] = useState([]);

  const [searchInp, setSearchInp] = useState("");

  const foodsData = () => {
    setLoading(true);
    const data = [
      {
        id: 1,
        name: "Chicken Burger",
        category: "Burger",
        price: 149,
        rating: 4.5,
        image: "https://i.ibb.co/chicken-burger.jpg",
        description:
          "Juicy grilled chicken burger with fresh lettuce and cheese.",
      },

      {
        id: 2,
        name: "Beef Pizza",
        category: "Pizza",
        price: 399,
        rating: 4.7,
        image: "https://i.ibb.co/beef-pizza.jpg",
        description: "Cheesy beef pizza topped with olives and capsicum.",
      },

      {
        id: 3,
        name: "Chicken Biryani",
        category: "Rice",
        price: 220,
        rating: 4.8,
        image: "https://i.ibb.co/chicken-biryani.jpg",
        description: "Traditional spicy chicken biryani with aromatic rice.",
      },

      {
        id: 4,
        name: "French Fries",
        category: "Snacks",
        price: 99,
        rating: 4.2,
        image: "https://i.ibb.co/french-fries.jpg",
        description: "Crispy golden potato fries with ketchup.",
      },

      {
        id: 5,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 180,
        rating: 4.9,
        image: "https://i.ibb.co/chocolate-cake.jpg",
        description: "Soft chocolate sponge cake with creamy frosting.",
      },

      {
        id: 6,
        name: "Fried Chicken",
        category: "Fast Food",
        price: 260,
        rating: 4.6,
        image: "https://i.ibb.co/fried-chicken.jpg",
        description: "Crunchy deep fried chicken served hot and crispy.",
      },

      {
        id: 7,
        name: "Cold Coffee",
        category: "Beverage",
        price: 120,
        rating: 4.3,
        image: "https://i.ibb.co/cold-coffee.jpg",
        description: "Refreshing cold coffee blended with ice cream.",
      },

      {
        id: 8,
        name: "Pasta Alfredo",
        category: "Italian",
        price: 280,
        rating: 4.4,
        image: "https://i.ibb.co/pasta-alfredo.jpg",
        description: "Creamy Alfredo pasta with mushrooms and chicken.",
      },

      {
        id: 9,
        name: "Vegetable Salad",
        category: "Healthy",
        price: 130,
        rating: 4.1,
        image: "https://i.ibb.co/vegetable-salad.jpg",
        description: "Fresh vegetable salad with olive oil dressing.",
      },

      {
        id: 10,
        name: "Mango Smoothie",
        category: "Beverage",
        price: 110,
        rating: 4.7,
        image: "https://i.ibb.co/mango-smoothie.jpg",
        description: "Sweet mango smoothie made with fresh mangoes.",
      },
    ];
    setAllFoods(data);
    setFoods(data);

    setLoading(false);
  };

  useEffect(() => {
    foodsData();
  }, []);

  // Search Function
  const handleSearch = () => {
    const searchFood = allFoods.filter((food) =>
      food.category.toLowerCase().includes(searchInp.toLowerCase()),
    );

    setFoods(searchFood);
  };

  // Category Filter
  const handleSelected = (e) => {
    const value = e.target.value;

    // show all data
    if (value === "") {
      setFoods(allFoods);
      return;
    }

    const selectFood = allFoods.filter(
      (food) => food.category.toLowerCase() === value.toLowerCase(),
    );

    setFoods(selectFood);
  };

  return (
    <div className="container mx-auto w-[80%] py-8">
      {/* Top Filter Section */}
      <div className="flex justify-between items-center px-10 gap-4 bg-zinc-400 dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-transparent hover:border-orange-400">
        {/* Search input*/}
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search food..."
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
              className="w-full px-5 py-2.5 bg-zinc-200 dark:bg-zinc-800 border border-transparent hover:border-orange-500 focus:border-orange-500 outline-none rounded-xl text-lg"
            />
          </div>

          <button
            onClick={handleSearch}
            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-medium cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Category Select */}
        <div>
          <select
            onChange={handleSelected}
            className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg"
          >
            <option value="">All Foods</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
            <option value="Rice">Rice</option>
          </select>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <h2 className="text-4xl text-center py-10">Loading...</h2>
      ) : foods.length === 0 ? (
        <h2 className="text-4xl text-center py-10">No Food Found</h2>
      ) : (
        <div className="grid grid-cols-4 gap-8 py-10">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodPage;
