 
// import React, { useState, useEffect } from 'react'

// //Component
// import Board from './Board'

// //Style
// import "./style.css"

// //Function
// import { updateURLParameter } from "./helpers"
// import { useSelector } from 'react-redux'

// function Puzzle() {
  
//     const images = useSelector((state) => state.images.images);
//     const randomImg= images[Math.floor(Math.random() * images.length)]?.image
//        console.log(images[Math.floor(Math.random() * images.length)]?.image)

//     // useEffect(() => {
//     //     const urlParams = new URLSearchParams(window.location.search)
//     //     if (urlParams.has("img")) {
//     //         setImgUrl(urlParams.get("img"))
//     //     }
//     // }, [])
//     // const [imgUrl, setImgUrl] = useState("")
//     // const handleImageChange = (e) => {
//     //     setImgUrl(e.target.value)
//     //     window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
//     // }

//     return (
//         <div className="puzzle">
//             <h1>PUZZLE</h1>
//             <Board  randomImg ={randomImg}/>
            
//         </div>
//     )
// }

// export default Puzzle
 
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

  //   useEffect(() => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     if (urlParams.has("img")) {
  //       setrandomImg(urlParams.get("img"));
  //     }
  //   }, []);
  //   const [randomImg, setrandomImg] = useState("");
  //   const handleImageChange = (e) => {
  //     setrandomImg(e.target.value);
  //     window.history.replaceState(
  //       "",
  //       "",
  //       updateURLParameter(window.location.href, "img", e.target.value)
  //     );
  //   };

  return (
    <div className="puzzle">
      <h1>PUZZLE</h1>
      <Board randomImg={randomImg} />
    </div>
  );
}

export default Puzzle;
 
