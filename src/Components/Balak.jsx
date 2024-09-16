import { useState, useEffect } from "react";
import data from "./data.json";

const Balak = () => {
  const [next, SetNext] = useState(1);

  return (
    <>
      <div className="bg-gradient-to-b from-[#444] to-[#555] min-h-screen p-20">
        {/* Slider Section */}
        <div className="relative text-center">
          {/* <img
            className="h-64 w-full object-cover object-center rounded-3xl opacity-80 bg-yellow-400 "
            src={data[next].download_url}
            alt=""
          /> */}
          <div className="h-64 w-full object-cover object-center rounded-3xl opacity-80 bg-[#FFA500] ">
            <img
              className="flex h-full w-auto mx-auto"
              src="https://img.freepik.com/premium-vector/mumbai-junction-railway-station-name-board-isolated-white_616731-186.jpg"
              alt=""
            />
            {/* <p>Sitamrhi Junc</p> */}
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white text-center font-bold text-4xl">
              Sitamarhi Junction
            </p>

            {/* Previous Button */}
            <button
              onClick={() => SetNext(next === 1 ? data.length - 1 : next - 1)}
              className="bg-red-600 p-2 m-2"
            >
              {"<"}
            </button>

            {/* Next Button */}
            <button
              onClick={() => SetNext(next === data.length - 1 ? 1 : next + 1)}
              className="bg-green-600 p-2 m-2"
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Content Section below the slider */}
        <div className="mt-40">
          <h1 className="text-white text-3xl font-bold text-center">
            Welcome to the Content Section
          </h1>
          <p className="text-white text-lg text-center mt-10">
            This is the content section below the slider. You can add more
            content here as needed.
          </p>
        </div>
      </div>
    </>
  );
};

export default Balak;
