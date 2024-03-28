import { all, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../actionType";
import { IcommonResponse } from "../../interfaces/responses/IcommonResponse";
import AuthService from "../../Services/authService";
import { ILoginResponse } from "../../interfaces/responses/IloginResponse";
import { toastMessages } from "../../enums/toastMessages";

function* onLoggIn(action: any) {
  try {
    yield put({ type: actionTypes.loggingIn, payload: true });
    let _result: IcommonResponse = yield AuthService.login(action.payload);
    if (!_result.isError) {
      let result = _result.data.authResult as ILoginResponse;
      yield put({ type: actionTypes.saveLogInResult, payload: result });
      if (localStorage.getItem("rememberme") == "false") {
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("refreshToken", result.refreshToken);
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("refreshToken", result.refreshToken);
      }
      yield put({ type: actionTypes.loggingIn, payload: false });
    } else {
      yield put({ type: actionTypes.showErrToast, payload: _result });
      yield put({ type: actionTypes.loggingIn, payload: false });
    }
  } catch (error) {
    yield put({
      type: actionTypes.showErrToast,
      payload: {
        isError: true,
        statusCode: 600,
        error: { message: toastMessages.UnExpectedError },
      } as IcommonResponse,
    });
    yield put({ type: actionTypes.loggingIn, payload: false });
  }
}

function* watchLogin() {
  yield takeEvery(actionTypes.login, onLoggIn);
}

export default function* AuthSagas() {
  yield all([watchLogin()]);
}
