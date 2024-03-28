import { IcommonResponse } from "../../../interfaces/responses/IcommonResponse";
import { actionTypes } from "../../actionType";
import { IerrSlice } from "./IerrSlice";

const initialState: IcommonResponse = {
  isError: false,
  statusCode: 0,
};

const errReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.showErrToast:
      return {
        ...state,
        ...action.payload
      } as IcommonResponse;
    case actionTypes.hideErrToast:
      return {
        ...initialState,
      } as IcommonResponse;
    default:
      break;
  }
  return state;
};

export default errReducer;
