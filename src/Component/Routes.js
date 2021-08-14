import { Redirect, Route, Switch } from "react-router";

//components
import SignUp from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import Puzzle from "./Puzzle/Puzzle";
import Navbar from "./Navbar/Navbar";
import ErrorPage from "./404Page/ErrorPage";

function Routes() {
  return (
    <Switch>


      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/games">
        <Puzzle />
      </Route>
      <Route exact path="/navbar">
        <Navbar />
      </Route>
      {/* <Route exact path="/error">
        <ErrorPage />
      </Route> */}
      <Redirect to="/" />


    </Switch>
  );
}
// عند الريدايركت بحط 404 بيج اوووووووووووووووووووك 

export default Routes;
