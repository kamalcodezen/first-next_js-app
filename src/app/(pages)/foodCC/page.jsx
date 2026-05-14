"use client";

import FoodCard from "@/components/ui/FoodCard";
import { useEffect, useState } from "react";

const FoodCC = () => {
  const [loading, setLoading] = useState(false);

  const [allFoods, setAllFoods] = useState([]);
  const [foods, setFoods] = useState([]);

  const [searchInp, setSearchInp] = useState("");

  const [inputSearch, setInputSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState("");

  const fetchData = async (search = "", category = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
      );
      const foodData = await res.json();
      setAllFoods(foodData.data);
      setFoods(foodData.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // console.log(allFoods);

  useEffect(() => {
    fetchData(inputSearch, filterSearch);
  }, [inputSearch, filterSearch]);

  const handleSearch = () => {
    setInputSearch(searchInp);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterSearch(value);
  };

  /*

  const handleSearch = () => {
    const inpSearch = allFoods.filter((food) =>
      food.name.toLowerCase().includes(searchInp.toLowerCase()),
    );
    setFoods(inpSearch);
  };

*/

  /*

    // filter korlam
  const handleFilter = (e) => {
    const value = e.target.value;
  
    // value na thakle all data data dekhabe
    if (!value) {
      setFoods(allFoods);
      return;
    }
    const filterSearch = allFoods.filter((food) =>
      food.category.toLowerCase().includes(value.toLowerCase()),
    );
    setFoods(filterSearch);
  };

*/

  return (
    <div className="container mx-auto w-[80%] py-8">
      {/* Top Filter Section */}
      <div className="flex justify-between items-center px-10 gap-4 bg-zinc-400 dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-transparent">
        {/* Search  input*/}
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-1">
            <input
              type="text"
              value={searchInp}
              // onChange={(e) => setSearchInp(e.target.value)}
              onChange={(e) => setSearchInp(e.target.value)}
              placeholder="Search food..."
              className="w-full px-5 py-2.5 bg-zinc-200 dark:bg-zinc-800 border border-transparent hover:border-orange-500 focus:border-orange-500 outline-none rounded-xl text-lg"
            />
          </div>

          <button
            // onClick={handleSearch}
            onClick={handleSearch}
            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-medium cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Category Select */}
        <div>
          <select
            // onChange={handleFilter}
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

export default FoodCC;
