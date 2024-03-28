import { all } from "redux-saga/effects";
import AuthSagas from "./sagas/authSaga";
export default function* rootSaga() {
  yield all([
    AuthSagas()
  ]);
}
