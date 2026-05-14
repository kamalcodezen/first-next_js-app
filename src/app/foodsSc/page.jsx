import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import SearchFood from "@/components/searchFood/SearchFood";
import FoodCard from "@/components/ui/FoodCard";

const foodsData = async (search = "", category = "") => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
  );
  const data = await res.json();
  return data.data;
};

const FoodServerComponents = async ({ searchParams }) => {
  const sp = await searchParams;

  const foods = await foodsData(sp.search, sp.category);
//   console.log(sp);

  return (
    <div className="container mx-auto w-[80%] py-8">
      {/* Top Filter Section */}
      <SearchFood />
      <CategoryFilter />

      {/* Loading */}
      {foods.length === 0 ? (
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

export default FoodServerComponents;
