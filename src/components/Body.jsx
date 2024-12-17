import React, { useEffect, useState } from "react";
import Yourmind from './Yourmind'
import Toprestaurant from "./Toprestaurant";

const Body = () => {
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState(0);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();

    setdata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleclicknext() {
    value>=210?"":setvalue((prev) => prev + 30);
  }
  console.log(value);

  function handleclickprev() {
    setvalue((prev) => Math.max(0, prev - 30)); 
  }

  return (
    <div className="w-full ">
      <div className="w-[75%] mx-auto mt-5 text-2xl font-bold overflow-hidden">
      <Yourmind/>
        <hr className="p-6" />
      <Toprestaurant/>
      <hr className="p-6" />
      </div>
    </div>
  );
};

export default Body;
