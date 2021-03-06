import React from 'react'
//Styles
import "./style.css"

function Orbits() {
    return (
        <div className="orbit">
            <div id='orbit-container'>
                <div id='neptune-orbit'>
                    <div id='neptune-square'>
                        <div id='neptune'>
                        </div>
                    </div>
                </div>
                <div id='uranus-orbit'>
                    <div id='uranus-square'>
                        <div id='uranus'></div>
                    </div>
                </div>
                <div id='saturn-orbit'>
                    <div id='saturn-square'>
                        <div id='saturn'></div>
                    </div>
                </div>
                <div id='jupiter-orbit'>
                    <div id='jupiter-square'>
                        <div id='jupiter'></div>
                    </div>
                </div>
                <div id='mars-orbit'>
                    <div id='mars-square'>
                        <div id='mars'></div>
                    </div>
                </div>
                <div id='earth-orbit'>
                    <div id='earth-square'>
                        <div id='earth'>
                            <div id='moon-orbit'>
                                <div id='moon-square'>
                                    <div id='moon'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='venus-orbit'>
                    <div id='venus-square'>
                        <div id='venus'></div>
                    </div>
                </div>
                <div id='mercury-orbit'>
                    <div id='mercury-square'>
                        <div id='mercury'></div>
                    </div>
                    <div id='sun'></div>
                </div>
            </div>
        </div>
    )
}

export default Orbits
