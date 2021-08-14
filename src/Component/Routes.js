import { Redirect, Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import Puzzle from "./Puzzle/Puzzle";
import Navbar from "./Navbar/Navbar";
import ErrorPage from "./404Page/ErrorPage";
import Profile from "./Profile/Profile";
import ItemList from "./SpaceStore/ItemList";

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
      <Route path="/navbar">
        <Navbar />
      </Route>
      {/* <Route path="/error">
        <ErrorPage />
      </Route> */}

      <Route path="/profile">
        <Profile />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
