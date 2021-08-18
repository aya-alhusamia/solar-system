import React from "react";
import Button from "@material-ui/core/Button";
import { HiOutlineLogout } from "react-icons/hi";
import { GiSpaceSuit } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../../store/action/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Navtitle } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  btn: {
    fontSize: 18,
    color: "white",
    "&:hover": {
      backgroundColor: "grey",
    },

  }

}));

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const usersignout = () => {
    dispatch(signout());
    history.push("/");
  };
  const classes = useStyles();
  return (
    <div>
      <div
        className="navbar navbar-expand-sm bg-dark navbar-light"
        style={{ backgroundColor: "#201f2013" }}
      >
        <div className="container-fluid">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Navtitle className="navbar-brand" style={{ color: "#f8f9fa" }} >
              <GiSpaceSuit size="2.0em" />
              Crisis Galaxy
            </Navtitle>
          </NavLink>

          <ul className="navbar-nav">
            {user && (
              <div>
                <NavLink to="/games" style={{ textDecoration: "none" }}>
                  <li className="nav-item" >
                    <Button className={classes.btn} >
                      Games
                    </Button>
                  </li>
                </NavLink>
                <NavLink to="/crisisstore" style={{ textDecoration: "none" }}>
                  <li className="nav-item">
                    <Button className={classes.btn}>Store</Button>
                  </li>
                </NavLink>
              </div>
            )}
            {user ? (
              <>
                <NavLink to="/games" style={{ textDecoration: "none" }}>
                  <li className="nav-item" style={{ paddingTop: "10px" }}>
                    <p
                      style={{
                        marginLeft: "5px",
                        marginRight: "20px",
                        color: "#f8f9fa",
                      }}
                    >
                      {" "}
                      Hi, {user.username}
                    </p>
                  </li>
                </NavLink>
                <div style={{ marginTop: "7px" }}>
                  {" "}
                  <HiOutlineLogout
                    onClick={usersignout}
                    size="1.5em"
                    color="#f8f9fa"
                  />
                </div>
              </>
            ) : (
              <>
                <NavLink to="/signin" style={{ textDecoration: "none" }}>
                  <li className="nav-item">
                    <Button className={classes.btn}>Log in</Button>
                  </li>
                </NavLink>
                <NavLink to="/signup" style={{ textDecoration: "none" }}>
                  <li className="nav-item">
                    <Button className={classes.btn}>Sign up</Button>
                  </li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




