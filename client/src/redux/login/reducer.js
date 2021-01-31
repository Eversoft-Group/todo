import store from "../store";
import * as types from "./constant";

const initialState = {
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_LOGIN: {
      return { ...state, token: action.data };
    }
    default: {
        return state
    }
  }
};

export default userReducer
