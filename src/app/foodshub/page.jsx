"use client";

import FoodCard from "@/components/ui/FoodCard";
import React, { useEffect, useState } from "react";

const FoodSClient = () => {
  const [loading, setLoading] = useState(false);

  //   original data
  // const [allFoods, setAllFoods] = useState([]);
  //   filter data
  const [foods, setFoods] = useState([]);

  const [searchInp, setSearchInp] = useState("");

  const [searching, setSearching] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const foodSData = async (search = "", category = "") => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
      );

      const foodData = await res.json();

      setFoods(foodData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    foodSData(searching, categoryFilter);
  }, [searching, categoryFilter]);

  // console.log(allFoods, foods, "all");

  const handleSearch = () => {
    setSearching(searchInp);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setCategoryFilter(value);
  };

  // console.log(allFoods);
  // console.log(searchInp);

  return (
    <div className="container mx-auto w-[80%] py-8">
      {/* Top Filter Section */}
      <div className="flex justify-between items-center px-10 gap-4 bg-zinc-400 dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-transparent">
        {/* Search */}
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-1">
            <input
              type="text"
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
              placeholder="Search food..."
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
            value={categoryFilter}
            onChange={handleFilter}
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

export default FoodSClient;
