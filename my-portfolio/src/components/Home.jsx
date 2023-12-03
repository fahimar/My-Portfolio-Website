import React from "react";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div>
      <img
        className="rounded-full w-96 h-96"
        src={HeroImage}
        alt="image description"
      />
    </div>
  );
};

export default Home;
