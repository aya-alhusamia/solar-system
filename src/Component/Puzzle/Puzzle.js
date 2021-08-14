import React, { useState, useEffect } from 'react'

//Component
import Board from './Board'

//Style
import "./style.css"

//Function
import { updateURLParameter } from "./helpers"
import { useSelector } from 'react-redux'

function Puzzle() {
  
    const images = useSelector((state) => state.images.images);
    const imgArray= images.map((image)=>  image.image)[Math.floor(Math.random() * images.length)];
       console.log(imgArray)

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search)
    //     if (urlParams.has("img")) {
    //         setImgUrl(urlParams.get("img"))
    //     }
    // }, [])
    // const [imgUrl, setImgUrl] = useState("")
    // const handleImageChange = (e) => {
    //     setImgUrl(e.target.value)
    //     window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
    // }

    return (
        <div className="puzzle">
            <h1>PUZZLE</h1>
            <Board  imgArray ={imgArray}/>
            
        </div>
    )
}

export default Puzzle
