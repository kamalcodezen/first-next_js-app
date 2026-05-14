"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFood = () => {
  const [searchInp, setSearchInp] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    // console.log(params, "params");

    if (searchInp) {
      params.set("search", searchInp);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
    // console.log(searchInp);
  };

  return (
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
    </div>
  );
};

export default SearchFood;
