import * as actionTypes from "../action/types";
import instance from "./instance";

export const updateUser = (user, history) => {
    return async (dispatch) => {
        console.log("1")
      try {
       
        
        const res = await instance.put( "/profile" ,user);
        history.push("/games");
        console.log("2");
        dispatch({
          type: actionTypes.UPDATE_USER,
          payload: res.data ,
          
        },
        console.log("3",res.data));
       
      } catch (error) {
        console.log(error);
      }
    };
  };