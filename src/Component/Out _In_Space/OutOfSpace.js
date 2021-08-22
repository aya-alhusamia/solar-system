import React from 'react'
//Style
import "./out.scss"
//Images
import img1 from "../Home/images/1p4w.gif"
import img2 from "../Home/images/28Ld.gif"
import img3 from "../Home/images/13t0.gif"
function OutOfSpace() {
    return (
        <div>
            <div class="bgtint"></div>
            <section class="bussinesscard">
                <div class="flip">
                    <div class="front">
                        <div class="top">
                            <div class="logo"><span class="fat">E</span><span class="skinny">K</span></div>
                        </div>
                        <div class="nametroduction">
                            <div class="name">Eduard Kosicky</div>
                            <div class="introduction">A Front End Developer</div>
                        </div>
                        <div class="contact">
                            <div class="website">
                                <span class="ion-earth"></span>
                                <a href="#">www.eduardkosicky.me</a>
                            </div>
                            <div class="twitter">
                                <span class="ion-social-twitter"></span>
                                <a href="#">@eduardkosicky</a>
                            </div>
                            <div class="phone ">
                                <span class="ion-ios7-telephone"></span>
                                <a href="#">0118 999 7253</a>
                            </div>
                            <div class="email ">
                                <span class="ion-paper-airplane"></span>
                                <a href="#">eduard@kosicky.me</a>
                            </div>
                        </div>
                    </div>
                    <div class="back"></div>
                </div>
            </section>
            <section class="tooltip">
                <p>
                    Hover over the card to see the back.
                </p>
            </section>
        </div>
    )
}

export default OutOfSpace
