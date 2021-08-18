import React from 'react'
//Style
import "./style.css"
//Images
import img1 from "../Home/images/1p4w.gif"
import img2 from "../Home/images/28Ld.gif"
import img3 from "../Home/images/13t0.gif"
function OutOfSpace() {
    return (
        <div>
            <div class="card" onclick="this.classList.toggle('expanded')">
                <img src={img1} />
                <div class="text1">
                    <div class="text-content">
                        <h1 class="title">OUR GOODS</h1>
                        <div class="body-text">are delivered with the same high quality as decades ago</div>
                    </div>
                </div>
                <img src={img1} />
            </div>
            <div class="card" onclick="this.classList.toggle('expanded')">
                <img src={img2} />
                <div class="text2">
                    <div class="text-content">
                        <h1 class="title">OUR LABEL</h1>
                        <div class="body-text">has stayed the same reliable brand for nearly a century</div>
                    </div>
                </div>
                <img src={img2} />
            </div>
        </div>
    )
}

export default OutOfSpace
