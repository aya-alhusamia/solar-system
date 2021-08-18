import decode from "jwt-decode";
//Components
import instance from "./instance";
import * as actionTypes from "./types";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", userData);
    dispatch(setUser(res.data.token));
    history.push("/games");
  } catch (error) {
    console.log(error.message);
  }
};
export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch(setUser(res.data.token));
    history.push("/games");
  } catch (error) {
    console.log(error.message);
  }
};
export const signout = () => async (dispatch) => {
  return dispatch(setUser());
};

export const checkForToken = () => async (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return dispatch(setUser(token));
    }
  } else {
    return dispatch(setUser());
  }
};
const setUser =  (token) => async (dispatch) => {
  if (token) {
    console.log("setuser if")
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("myToken", token);
    const decodedToken =decode(token)
    let myUser = await instance.get("/myUser")
    dispatch( {
      type: actionTypes.SET_USER,
      payload: myUser.data,
    });
  } else {
    console.log("setuser else")
    localStorage.removeItem("myToken");
    dispatch( {
      type: actionTypes.SET_USER,
      payload: null,
    });
  }
};
export const updateUser = (user, history) => {
  console.log("user from action", user);
  return async (dispatch) => {
    try {
      const res = await instance.put("/profile", user);
      dispatch(setUser(res.data.token));
      history.push("/games");
    } catch (error) {
      console.log(error);
    }
  };
};
export const scoreUpdate = (score, history) => {
  return async (dispatch) => {
    try {
      console.log("score update")
      const res = await instance.put("/score", score);
      dispatch(checkForToken());
      // history.push("/crisisstore");
    } catch (error) {
      console.log(error);
    }
  };
};
