import { ILoginResponse } from "../../../interfaces/responses/IloginResponse";

export interface IauthSlice {
  loggingIn: boolean;
  loginResult: ILoginResponse|null;
}
