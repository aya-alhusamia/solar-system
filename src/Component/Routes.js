import { Redirect, Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import Puzzle from "./Puzzle/Puzzle";
import Navbar from "./Navbar/Navbar";
import ErrorPage from "./404Page/ErrorPage";
import Profile from "./Profile/Profile";
import ItemList from "./SpaceStore/ItemList";
import SolarSystem from "./Solar-System/SolarSystem/SolarSystem";
import Home from "./Home/Home";
import UserItemList from "./UserItems/UserItemList";
import Out_In_Space from "./Out _In_Space/Out_In_Space"
import OutOfSpace from "./Out _In_Space/OutOfSpace";
import Test from "./Out _In_Space/Test";
function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/games">
        <Puzzle />
      </Route>
      <Route path="/crisisstore">
        <ItemList />
      </Route>
      <Route path="/myitems">
        <UserItemList />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/navbar">
        <Navbar />
      </Route>
      <Route path="/solar">
        <SolarSystem />
      </Route>
      <Route path="/space">
        <Out_In_Space />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      {/* <Route path="/error">
        <ErrorPage />
      </Route> */}
    </Switch>
  );
}

export default Routes;
