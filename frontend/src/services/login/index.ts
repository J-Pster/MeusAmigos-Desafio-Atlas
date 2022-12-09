import { ApiResponse } from "apisauce";
import { LoginRequest, LoginResponse } from "models/interfaces/types";
import { Api } from "../api/api";
import { GeneralApiProblem, getGeneralApiProblem } from "../api/api-problem";

export class LoginApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async postLogin(payload: LoginRequest): Promise<LoginResponse | GeneralApiProblem> {
    try {
      const response: ApiResponse<LoginResponse> = await this.api.apisauce.post(
        `/login`, { ...payload }
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      if(data) {
        this.api.apisauce.setHeader("Authorization", `Bearer ${data.token}`);
      }

      return data as LoginResponse;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }
}