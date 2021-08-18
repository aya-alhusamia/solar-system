import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Provider from './Provider/Provider';
import Wrapper from './Wrapper/Wrapper';
import Navbar from './Navbar/Navbar';
import Mercury from '../pages/Mercury/Mercury';
import Venus from '../pages/Venus/Venus';
import Earth from '../pages/Earth/Earth';
import Mars from '../pages/Mars/Mars';
import Jupiter from '../pages/Jupiter/Jupiter';
import Saturn from '../pages/Saturn/Saturn';
import Uranus from '../pages/Uranus/Uranus';
import Neptune from '../pages/Neptune/Neptune';
import KeyVisual from './KeyVisual/KeyVisual';

function SolarSystem() {
    const location = useLocation();
    const [activePlanet, setActivePlanet] = useState('/solar');
    return (
        <div>
            {/* <Provider>
                <Wrapper>
                    <Navbar
                        pathName={location.pathname}
                        onHover={setActivePlanet}
                        activePlanet={activePlanet}
                    />
                    <AnimatePresence>
                        <Mercury />
                        <Venus />
                        <Earth />
                        <Mars />
                        <Jupiter />
                        <Saturn />
                        <Uranus />
                        <Neptune />
                        <KeyVisual activePlanet={activePlanet} />
                    </AnimatePresence>
                </Wrapper>
            </Provider> */}
            <Provider>
                <Wrapper>
                    <Navbar
                        pathName={location.pathname}
                        onHover={setActivePlanet}
                        activePlanet={activePlanet}
                    />
                    <AnimatePresence>
                        <Switch location={location} key={location.key}>
                            <Route exact path="/solar/mercury">
                                <Mercury />
                            </Route>
                            <Route exact path="/solar/venus">
                                <Venus />
                            </Route>
                            <Route exact path="/solar/earth">
                                <Earth />
                            </Route>
                            <Route exact path="/solar/mars">
                                <Mars />
                            </Route>
                            <Route exact path="/solar/jupiter">
                                <Jupiter />
                            </Route>
                            <Route exact path="/solar/saturn">
                                <Saturn />
                            </Route>
                            <Route exact path="/solar/uranus">
                                <Uranus />
                            </Route>
                            <Route exact path="/solar/neptune">
                                <Neptune />
                            </Route>
                            <Route exact path="/solar">
                                <KeyVisual activePlanet={activePlanet} />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </Wrapper>
            </Provider>

        </div>
    )
}

export default SolarSystem
