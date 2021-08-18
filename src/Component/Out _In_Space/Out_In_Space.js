import React from 'react'
//Style
import "./style.css"
//Images
import img1 from "../Home/images/1p4w.gif"
import img2 from "../Home/images/28Ld.gif"
import img3 from "../Home/images/13t0.gif"
function Out_In_Space() {
    return (
        <div >

            <div className="stars">

            </div>
            <div className="twinkling" >
            </div>
            <div className="clouds">
                <div className="out">
                    <div className="intro">
                        <h1>What is there out in space:</h1>
                        <p>The universe is everything that exists, including the Solar System and outer space.<br />
                            We cannot see everything in our universe from Earth. <br />
                        </p>
                    </div>
                    <div className="c2">
                        <div className="card">
                            <div className="imgBox">
                                <img src={img1} />
                            </div>
                            <div className="content">
                                <h3>Astronomical object</h3>
                                <p><span className="a1">Star clusters:</span>
                                    are large groups of stars.
                                    Two main types of star clusters can be distinguished:
                                    <span className="a2">globular clusters</span> are tight groups of hundreds to millions of old stars which are gravitationally bound,
                                    <span className="a2">open clusters</span>are more loosely clustered groups of stars, generally containing fewer than a few hundred members, and are often very young.
                                    <br />
                                    <span className="a1">Nebulae:</span>
                                    are distinct bodies of interstellar clouds (which can consist of cosmic dust, hydrogen, helium, molecular clouds; possibly as ionized gases).
                                    <br />
                                    <span className="a1">Galaxies:</span>
                                    is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.   astronomical bodies
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBox">
                                <img src={img2} />
                            </div>
                            <div className="content">
                                <h3>Astronomical bodies</h3>
                                <p><span className="a1">Asteroids:</span>is a minor planet of the inner Solar System.<br />
                                    <span className="a1">Moons (Natural satellite):</span> an astronomical body that orbits a planet, dwarf planet, or small solar system body (or sometimes another natural satellite).<br />
                                    <span className="a1">Planets:</span> is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity.<br />
                                    <span className="a1"> Stars:</span> is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity.<br />
                                </p>
                            </div>
                        </div>


                        <div className="card">
                            <div className="imgBox">
                                <img src={img3} />
                            </div>
                            <div className="content">
                                <h3>Comets</h3>
                                <p>A Comet may be identified as both body and object:<br />
                                    It is a body when referring to the frozen nucleus of ice and dust, and an object when describing the entire comet with its diffuse coma and tail.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Out_In_Space
