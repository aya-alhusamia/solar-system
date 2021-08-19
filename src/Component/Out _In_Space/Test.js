import React, { useState } from 'react'
import img1 from "../Home/images/1p4w.gif"
import "./test.css"
function Test() {
    const [card, setCard] = useState("card")
    return (
        <div className="rr">
            <div className={card} onMouseOver={() => setCard("cardMousOver")} onMouseOut={() => setCard("card")}>
                <div className="imgBox">
                    {/* <img src={img1} /> */}
                </div>
                <div >
                    <h1>Astronomical object</h1>
                    <span><i class="fas fa-chevron-down"></i></span>
                </div>

            </div>
        </div>

    )
}

export default Test
