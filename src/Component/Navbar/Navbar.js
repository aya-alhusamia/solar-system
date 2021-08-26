import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { RiCoinsLine } from "react-icons/ri";
import { GiSpaceSuit } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "5px",
                  paddingRight: "10px",
                }}
                className="parg"
              >
                POINTS : {user?.score}
                <RiCoinsLine
                  size="2rem"
                  color="#f8f9fa"
                  style={{ paddingLeft: "7px" }}
                />
              </p>
              <NavLink to="/profile">
                <li
                  className="nav-item"
                  style={{
                    paddingTop: "10px",
                    textDecoration: "none",
                    paddingLeft: "5px",
                  }}
                >
                  <CgProfile
                    size="2.5rem"
                    color="white"
                    style={{
                      // paddingRight: "4px",
                      paddingBottom: "10",
                      marginLeft: "-10px",
                      // paddingLeft: "-3px",
                    }}
                  />
                </li>
              </NavLink>
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
