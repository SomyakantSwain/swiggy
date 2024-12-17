
import React, { useEffect, useState } from "react";

const Yourmind = () => {
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
    value >= 210 ? "" : setvalue((prev) => prev + 30);
  }
  console.log(value);

  function handleclickprev() {
    setvalue((prev) => Math.max(0, prev - 30));
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1>What's in your mind?</h1>
        <div className="flex mr-4">
          <div
            onClick={handleclickprev}
            className={`left-arrow rounded-full w-9 h-9 flex items-center justify-center ${
              value <= 0 ? "bg-gray-100" : "bg-gray-200"
            }`}
          >
            <i
              className={`ri-arrow-left-line  ${
                value <= 0 ? "text-gray-400" : "text-gray-800"
              } `}
            ></i>
          </div>

          <div
            onClick={handleclicknext}
            className="right-arrow bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center"
          >
            <i
              className={`ri-arrow-right-line  ${
                value >= 210 ? "text-gray-400" : "text-gray-800"
              } `}
            ></i>
          </div>
        </div>
      </div>
      <div
        style={{ transform: `translateX(-${value}%)` }}
        className="flex gap-3 duration-1000"
      >
        {data.map((item) => (
          <img
            className="w-[160px] h-[170px]"
            key={item.id}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Yourmind;
