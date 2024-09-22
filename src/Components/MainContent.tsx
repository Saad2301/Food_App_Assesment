import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Logo1 from "../assests/icons/Logo 1.png";
import SearchIcon from "../assests/icons/SearchIcon.png";
import axios from "axios";
import Tabs from "./Tabs";
import BannerImage from "./BannerImage";

const ReceipeCards = lazy(() => import("./ReceipeCards"));

const MainContent = () => {
  interface Recipe {
    id: number;
    name: string;
    reviewCount: number;
    image: string;
    prepTimeMinutes: number;
    rating: number;
    mealType: string[];
  }

  const navigate = useNavigate();
  const [data, setData] = useState<Recipe[]>([]);
  const [search, setSearch] = useState<string>("");
  const [cloneData, setCloneData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/recipes");
      const data = response.data;
      const recipes = data?.recipes || [];
      setCloneData(recipes);
      setData(recipes);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!search) {
      setCloneData(data);
    } else {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setCloneData(filteredItems);
    }
  };

  const selectHandler = (id: number) => {
    const selectedRecipe = data.find((x) => x?.id === id) || {};
    localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));
    navigate("/detail");
  };

  return (
    <div className="flex flex-col mt-[20px]">
      <div className="flex h-[120px] items-center sticky top-0 bg-white z-50 shadow-md">
        <div>
          <img
            src={Logo1}
            alt="cookpal"
            className="w-[150px] h-[72px] mt-[5px] ml-[112px]"
          />
        </div>
        <div className="flex h-[60px] items-center w-[60%] ml-[20px] justify-end">
          <div className="flex w-[726px] h-[46px] border-[1px] rounded-[20px] items-center">
            <div className="flex items-center justify-center font-semibold leading-[24px] text-[20px] bg-gray-100 text-black w-[211px] h-[44px] rounded-[20px]">
              All Categories
            </div>

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e?.target?.value)}
              className="w-full text-gray-500 pl-[30px] outline-none"
            />

            {/* Search Button */}
            <button
              onClick={(e) => searchHandler(e)}
              className="bg-[#D0C5C5] p-4 rounded-full text-center"
            >
              <img src={SearchIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>

      <BannerImage />
      <Tabs />

      {loading ? (
        <p>Loading...</p>
      ) : cloneData.length === 0 ? (
        <p>No recipes found</p> 
      ) : (
        <Suspense fallback={<p>Loading recipes...</p>}>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-w-[1045px] relative m-auto gap-6">
            {cloneData.map((recipe) => (
              <ReceipeCards
                key={recipe.id}
                recipeData={recipe}
                selectHandler={selectHandler}
              />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default MainContent;
