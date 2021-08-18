import React from "react";
import Button from "@material-ui/core/Button";
import { HiOutlineLogout } from "react-icons/hi";
import { GiSpaceSuit } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../../store/action/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Navtitle } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

const useStyles = makeStyles(() => ({
  btn: {
    fontSize: 18,
    color: "white",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
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
    <div
      className="navbar navbar-expand-sm bg-dark navbar-light"
      style={{ backgroundColor: "#495057" }}
    >
      <div className="container-fluid">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Navtitle className="navbar-brand" style={{ color: "#f8f9fa" }}>
            <GiSpaceSuit size="2.0em" />
            Crisis Galaxy
          </Navtitle>
        </NavLink>

        <ul className="navbar-nav">
          {user ? (
            <>
              <NavLink to="/games" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <Button className={classes.btn}>Games</Button>
                </li>
              </NavLink>
              <NavLink to="/crisisstore" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <Button className={classes.btn}>Store</Button>
                </li>
              </NavLink>
              <NavLink to="/myitems" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <Button className={classes.btn}>my Items</Button>
                </li>
              </NavLink>
              <NavLink to="/profile">
                <li
                  className="nav-item"
                  style={{ paddingTop: "10px", textDecoration: "none" }}
                >
                  <CgProfile
                    size="2em"
                    color="white"
                    style={{
                      paddingRight: "8",
                      paddingBottom: "10",
                      paddingLeft: "5",
                    }}
                  />
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
              <NavLink to="/signin">
                <li className="nav-item">
                  <Button className={classes.btn}>Sign in</Button>
                </li>
              </NavLink>
              <NavLink to="/signup">
                <li className="nav-item">
                  <Button className={classes.btn}>Sign up</Button>
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
