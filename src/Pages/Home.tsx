import React from "react";
import Topbox from "./components/Topbox";
import ChartBox from "./components/ChartBox";

const Home = () => {
  return (
    <div className=" h-dvh grid grid-cols-4 grid-rows-4 gap-4 px-3 py-3">
      <div className="p-2 rounded-xl row-span-3 bg-orange-300">
        <Topbox />
      </div>
      <div className="p-2 rounded-xl bg-orange-300">
        <ChartBox />
      </div>
      <div className="p-2 rounded-xl bg-orange-300">
        <ChartBox />
      </div>
      <div className="p-2 rounded-xl row-span-3 bg-orange-300">Box 4</div>
      <div className="p-2 rounded-xl bg-orange-300">
        <ChartBox />
      </div>
      <div className="p-2 rounded-xl bg-orange-300">
        <ChartBox />
      </div>
      <div className="p-2 rounded-xl bg-orange-300 row-span-2 col-span-2">
        Box 7
      </div>
      <div className="p-2 rounded-xl bg-orange-300 ">Box 8</div>
      <div className="p-2 rounded-xl bg-orange-300">Box 9</div>
    </div>
  );
};

export default Home;
