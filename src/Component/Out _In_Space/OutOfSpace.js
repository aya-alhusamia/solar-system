import React, { useState } from 'react'
//Style
import "./out.scss"
//Images
import img1 from "../Home/images/1p4w.gif"
import img2 from "../Home/images/28Ld.gif"
import img3 from "../Home/images/13t0.gif"
function OutOfSpace() {
    return (
        <div>

            <div className="stars">

            </div>
            <div className="twinkling" >
            </div>
            <div className="clouds">
                <div className="out">
                    <div className="intro">
                        <h1 >What is there out in space:</h1>
                        <p style={{ fontSize: " 130%" }}>The universe is everything that exists, including the Solar System and outer space.<br />
                            We cannot see everything in our universe from Earth. <br />
                        </p>
                    </div>
                    <div className="att">
                        <div class="contaner">
                            <div class="carde">
                                <figure class="carde__thumb">
                                    <img src={img1} alt="Picture by Kyle Cottrell" class="carde__image" />
                                    <figcaption class="carde__caption">
                                        <h2 class="carde__title">Astronomical bodies</h2>
                                        <p class="carde__snippet"> Asteroids: is a minor planet of the inner Solar System.<br />
                                            Moons (Natural satellite):  an astronomical body that orbits a planet, dwarf planet, or small solar system body (or sometimes another natural satellite).<br />
                                            Planets:  is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity.<br />
                                            Stars:  is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity.<br /></p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="carde">
                                <figure class="carde__thumb">
                                    <img src={img2} alt="Picture by Kyle Cottrell" class="carde__image" />
                                    <figcaption class="carde__caption">
                                        <h2 class="carde__title">Astronomical object</h2>
                                        <p class="carde__snippet"> Star clusters:
                                            are large groups of stars.
                                            Two main types of star clusters can be distinguished:
                                            globular clusters  are tight groups of hundreds to millions of old stars which are gravitationally bound,
                                            open clusters are more loosely clustered groups of stars, generally containing fewer than a few hundred members, and are often very young.
                                            <br />
                                            Nebulae:
                                            are distinct bodies of interstellar clouds (which can consist of cosmic dust, hydrogen, helium, molecular clouds; possibly as ionized gases).
                                            <br />
                                            Galaxies:
                                            is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.   astronomical bodies</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="carde">
                                <figure class="carde__thumb">
                                    <img src={img3} alt="Picture by Kyle Cottrell" class="carde__image" />
                                    <figcaption class="carde__caption">
                                        <h2 class="carde__title">Comets</h2>
                                        <p class="carde__snippet"> A Comet may be identified as both body and object:<br />
                                            It is a body when referring to the frozen nucleus of ice and dust, and an object when describing the entire comet with its diffuse coma and tail.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutOfSpace
