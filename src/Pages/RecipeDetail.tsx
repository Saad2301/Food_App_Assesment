import React from "react";
import Header from "../Components/Header";
import DetailCard from "../Components/DetailCard";
import Footer from "../Components/Footer";
import Logo1 from "../assests/icons/Logo 1.png";
import pistaciafood from "../assests/Images/pistaciafood.png";
import BannerImage from "../Components/BannerImage";
import Tabs from "../Components/Tabs";
function RecipeDetail() {
  return (
    <div className="App">
      <Header />
      <div>
        <img
          src={Logo1}
          alt="cookpal"
          className="w-[150px] h-[72px] mt-[5px] ml-[112px]"
        />
      </div>
      <BannerImage />
      <Tabs />
      <DetailCard />
      <Footer />
    </div>
  );
}

export default RecipeDetail;
