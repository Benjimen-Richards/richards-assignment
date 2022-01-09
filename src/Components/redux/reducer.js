import React from "react";

const initialState = {
  users: [],

};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      action.payload.map((item, idx) => {
        let user = {
          userData: item,
          timer: "",
          status: "",
          id: idx,
          interval:null
        };
        state.users.push(user);
      });
      return {
        ...state,
      };
      break;
    case "SET_USER_TIMER":
      if (action.payload.timer > 0) {
        const selecteduser = state.users[action.payload.id];
        selecteduser.timer = action.payload.timer;
        selecteduser.status = action.payload.status;
        selecteduser.interval=action.payload.interval
        return {
          ...state,
        };
      } else {
        const selecteduser = state.users[action.payload.id];
        selecteduser.timer = "";
        selecteduser.status = "";
        clearInterval(action.payload.interval)
        return {
          ...state,
        };
      }
      break;

    case "REMOVE_USER_TIMER":
      const selecteduser = state.users[action.payload.id];
      selecteduser.timer = null;
      selecteduser.status = null;
      clearInterval(action.payload.interval)
      return {
        ...state,
      };
    default:
      break;
  }
};

export default reducer;
