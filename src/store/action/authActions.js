import decode from "jwt-decode";
//Components
import instance from "./instance";
import * as actionTypes from "./types";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", userData);
    instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
    dispatch(setUser(res.data.token));
    history.push("/games");
  } catch (error) {
    console.log(error.message);
  }
};
export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
    dispatch(setUser(res.data.token));

    history.push("/games");

   
  } catch (error) {
    console.log(error.message);
  }
};
export const signout = () => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  } else {
    return setUser();
  }
};
const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
export const updateUser = (user, history) => {
  return async (dispatch) => {

    try {
      const res = await instance.put("/profile", user);
    
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      dispatch(setUser(res.data.token));
      history.push("/games");
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateScore = (user, history) => {
  
  return async (dispatch) => {   
    
    try {
   
      const res = await instance.put( "/test" ,user);
      dispatch(setUser(res.data))
      history.push("/games");
    } catch (error) {
      console.log(error);
    }
  };
};

