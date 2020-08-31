import { LOGIN, LOGOUT } from "./actionTypes";

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
