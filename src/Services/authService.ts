import jokaApi from "../axios/interceptors";
import { toastMessages } from "../enums/toastMessages";
import { IloginRequest } from "../interfaces/requests/IloginRequest";
import { IcommonResponse } from "../interfaces/responses/IcommonResponse";
import { endPoints } from "../utils/endPoints";

export default class AuthService {
  static async login(model: IloginRequest): Promise<IcommonResponse> {
    return await jokaApi
      .post(endPoints.loginUrl, model)
      .then(function (response) {
        let result: IcommonResponse = response.data;
        return result;
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.data) {
            let result: IcommonResponse =
              error?.response?.data ?? toastMessages.UnExpectedError;
            return result;
          } else {
            return {
              isError: false,
              statusCode: -400,
              error: {
                message: toastMessages.UnExpectedError,
              },
            } as IcommonResponse;
          }
        } else if (error.request) {
          return {
            isError: false,
            statusCode: -400,
            error: {
              message: toastMessages.NetworkError,
            },
          } as IcommonResponse;
        } else if (error.message) {
          console.log("error3 ", error.message);
          //do something other than the other two
        }
        return {
          isError: false,
          statusCode: -400,
          error: {
            message: toastMessages.UnExpectedError,
          },
        } as IcommonResponse;
      });
  }
}
