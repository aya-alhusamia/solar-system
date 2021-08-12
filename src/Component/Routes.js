import { Route, Switch } from "react-router";

import SignIn from "./Authentication/Signin";
//components
import SignUp from "./Authentication/Signup";
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
