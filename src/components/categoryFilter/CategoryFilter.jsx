"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const CategoryFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //   const [categoryFilter, setCategoryFilter] = useState("");

  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

 

  return (
    <div className="flex justify-between items-center px-10 gap-4 bg-zinc-400 dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-transparent">
      {/* Category Select */}
      <div>
        <select
          onChange={(e) => handleCategory(e.target.value)}
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
  );
};

export default CategoryFilter;
