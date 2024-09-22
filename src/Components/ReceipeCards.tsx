import React from 'react';
import clockIcon from '../assests/icons/clock.svg'
interface Recipe {
  id: number;
  name: string;
  reviewCount: number;
  image: string;
  prepTimeMinutes: number;
  rating: number;
  mealType: string[];
}

interface ReceipeCardsProps {
  recipeData: Recipe;
  selectHandler: (id: number) => void; 
}

const ReceipeCards: React.FC<ReceipeCardsProps> = ({ recipeData, selectHandler }) => {
  const { id, name, image, prepTimeMinutes, rating, mealType } = recipeData;

  return (
    <div key={id} className="w-[306px] mt-[96px]" onClick={() => selectHandler(id)}>
      <div className="flex flex-wrap justify-between">
        <div>
          <img src={image} alt={name} className="w-[306.93px] h-[257.91px]" />
          <div className="flex justify-between mt-[9.15px]">
            <span className="text-[15px] leading-[18.29px]">{name || ''}</span>
            <span className="bg-[#84BD00] px-2">Reviews:{rating || 0}</span>
          </div>
          <div className="flex justify-between mt-[22.22px]">
            <div className="flex gap-2 items-center ">
              <img
              src={clockIcon} alt='clock'
              className='w-[18.56px] h-[26.14px]'
              />
              <span>{prepTimeMinutes || 0} minutes</span>
            </div>
            <div className="flex flex-col">
              <span>{mealType[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceipeCards;
