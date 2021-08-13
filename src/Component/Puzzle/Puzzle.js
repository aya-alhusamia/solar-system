import React, { useState, useEffect } from 'react'

//Component
import Board from './Board'

//Style
import "./style.css"

//Function
import { updateURLParameter } from "./helpers"


function Puzzle() {
    const [imgUrl, setImgUrl] = useState("")

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.has("img")) {
            setImgUrl(urlParams.get("img"))
        }
    }, [])

    const handleImageChange = (e) => {
        setImgUrl(e.target.value)
        window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))

    }

    return (
        <div className="puzzle">
            <h1>PUZZLE</h1>
            <Board imgUrl={imgUrl} />
            <input value={imgUrl} onChange={handleImageChange} />
        </div>
    )
}

export default Puzzle
