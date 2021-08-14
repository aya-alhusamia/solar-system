import { Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import SignIn from "./Authentication/Signin";
import Puzzle from "./Puzzle/Puzzle";
import Profile from "./Profile";

function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>

      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/games">
        <Puzzle />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
}

export default Routes;
