import { Redirect, Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import Puzzle from "./Puzzle/Puzzle";
import Navbar from "./Navbar/Navbar";
import ErrorPage from "./404Page/ErrorPage";

import ItemList from "./SpaceStore/ItemList";
import SolarSystem from "./Solar-System/SolarSystem/SolarSystem";
import Home from "./Home/Home";
import UserItemList from "./UserItems/UserItemList";
import Test from "./UserItems/Test";
import UserItem from "./UserItems/UserItem";
import Planet from "./PlanetGame/Planet";
import Main from "./MemoryGame/Main";
import OutOfSpace from "./Out _In_Space/OutOfSpace";
import Games from "./Games/Games";
import { useSelector } from "react-redux";
import StripeContainer from "./Stripe/StripeContainer";
import Profile2 from "./Profile/Profile2";
import Orbits from "./UserItems/Orbits/Orbits";
import Astro from "./Profile/Astro";
import Index from "./Stripe/Credit";

import VideoList from "./Video/VideoList";

function Routes() {
  const user = useSelector((state) => state.user.user);
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      {user ? (
        <Route path="/games">
          <Games />
        </Route>
      ) : (
        <Route path="/signin">
          <Signin />
        </Route>
      )}
      <Route path="/checkout">
        {/* <PaymentForm /> */}
        <Index />
        {/* <StripeContainer /> */}
      </Route>
      <Route path="/puzzle">
        <Puzzle />
      </Route>
      <Route path="/memory">
        <Main />
      </Route>
      <Route path="/documentaryfilms">
        <VideoList />
      </Route>
      <Route path="/crisisstore">
        <ItemList />
      </Route>
      <Route path="/myitems">
        {/* <UserItemList /> */}
        <Test />
      </Route>
      <Route path="/planet">
        <Planet />
      </Route>
      <Route path="/profile">
        {/* <Profile1 /> */}
        <Profile2 />
      </Route>
      <Route path="/navbar">
        <Navbar />
      </Route>
      <Route path="/solar">
        <SolarSystem />
      </Route>
      <Route path="/space">
        <OutOfSpace />
      </Route>

      <Route path="/">
        <Home />
      </Route>

      {/* <Route path="/error">
        <ErrorPage />
      </Route> */}
      {/* <Redirect to="/error" /> */}
    </Switch>
  );
}

export default Routes;
