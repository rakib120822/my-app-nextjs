import MenuCard from "@/component/cards/MenuCard";
import React from "react";

const Menu = async () => {
  const data = await fetch("http://localhost:8080/product");
  const foods = await data.json();
  console.log({ foods });
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 px-4 gap-5 my-10">
      {foods.map((product) => (
        <MenuCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Menu;
