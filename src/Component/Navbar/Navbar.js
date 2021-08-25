import React, { useState } from "react";
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
import { useEffect } from "react";

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
  const [level, setLevel] = useState(1);
  // useEffect(() => {
  //   setLevel(Math.floor(user?.score / 500))?.value();
  // }, []);
  console.log("level", level);
  return (
    <div
      className="navbar navbar-expand-sm bg-dark navbar-darck"
      style={{ backgroundColor: "#131213" }}
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
              <p style={{ fontSize: "20px", marginTop: "5px" }} className="parg">
                level:{Math.round(user?.score / 500)}
              </p>
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
              <NavLink to="/signin" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <Button className={classes.btn}>Sign in</Button>
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
  );
};

export default Navbar;
