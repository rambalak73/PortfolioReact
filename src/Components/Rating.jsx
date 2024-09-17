import React, { useState } from "react";

function rating() {
  const arr = new Array(5).fill(0);
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();

  return (
    <>
      <div className="flex gap-1 text-2xl font-bold">
        {arr.map((curValue, index) => {
          return (
            <span onClick={() => { setRating(index + 1); }}
              onMouseEnter={() => { setHover(index + 1); }}
              onMouseLeave={() => { setHover(0); }}
              className={`cursor-pointer ${ index < rating || index < hover ? "text-yellow-400 " : "text-black" }`}
              key={index}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
}

export default rating;
