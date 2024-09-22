import React, { useEffect, useState } from "react";
import check from "../assests/icons/check.svg";

const DetailCard = () => {
  interface ReceipeDetails {
    name: string;
    instructions: string[];
    ingredients: string[];
    image: string;
  }
  const [data, setData] = useState<ReceipeDetails | null>();
  useEffect(() => {
    const getData = localStorage.getItem("selectedRecipe") || "";
    if (getData) {
      const parsedData = getData ? JSON.parse(getData) : {};
      const { name, instructions, ingredients, image } = parsedData;
      const receipeData: ReceipeDetails = {
        name: name,
        instructions: instructions,
        ingredients: ingredients,
        image: image,
      };

      setData(receipeData);
    }

    return () => {
      localStorage.removeItem("selectedRecipe");
    };
  }, []);
  console.log("local state db:", data);
  return (
    <div className="px-[60px] my-[96px] ">
      <div className="flex flex-wrap justify-between max-w-[1370px] relative m-auto">
        <div>
          <div className="bg-[#8B888836] w-[560px] rounded-[28px] p-6 ">
            <div className="text-[20px] text-black">{data?.name} </div>
            <div>{data?.instructions}</div>
            <div className="font-semibold mt-[30px] pb-[30px] border-b border-gray-300 ">
              Ingredients
            </div>

            <div>
              {data?.ingredients.map((ing, index) => (
                <div key={index} className="flex my-[20px] ">
                  <span className="bg-[#509E2F] rounded-full h-[25px] w-[25px] flex justify-center items-center">
                    <img src={check} />
                  </span>
                  <span className="font-medium leading-[24px] text-[#A2A8BA] ml-[20px] ">
                    {ing}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img src={data?.image} className="w-[549px] h-[549px] rounded-full" />
      </div>
    </div>
  );
};

export default DetailCard;


