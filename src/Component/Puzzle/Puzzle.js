
import React, { useState, useEffect } from "react";

//Component
import Board from "./Board";

//Style
import "./style.css";

//Function
import { updateURLParameter } from "./helpers";
import { useSelector } from "react-redux";

function Puzzle() {
  const images = useSelector((state) => state.images.images);
  const randomImg = images[Math.floor(Math.random() * images.length)]?.image;
  console.log(images[Math.floor(Math.random() * images.length)]?.image);


  return (
    <div className="puzzle">
      <h1>PUZZLE</h1>
      <Board randomImg={randomImg} />
    </div>
  );
}

export default Puzzle;
 
