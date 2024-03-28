import { ILoginResponse } from "../../../interfaces/responses/IloginResponse";
import { actionTypes } from "../../actionType";
import { IauthSlice } from "./IauthSlice";

const initialState: IauthSlice = {
  loginResult: null,
  loggingIn: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.loggingIn:
      console.log("action: ", action);
      
      return {
        ...state,
        loggingIn: action.payload,
      } as IauthSlice;
    case actionTypes.saveLogInResult:
      console.log("action: ", action);
      return {
        ...state,
        loginResult: { ...action.payload } as ILoginResponse,
      };
    default:
      break;
  }
  return state;
};

export default authReducer;
