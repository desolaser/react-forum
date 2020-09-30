import { LOGIN } from "../actionTypes";

const login = (user) => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export default login;
