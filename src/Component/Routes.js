import { Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import SignIn from "./Authentication/Signin";
import Puzzle from "./Puzzle/Puzzle";

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
    </Switch>
  );
}

export default Routes;
