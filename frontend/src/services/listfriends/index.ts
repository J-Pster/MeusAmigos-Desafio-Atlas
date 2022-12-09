import { ApiResponse } from "apisauce";
import { ListFriendsResponse } from "models/interfaces/types";
import { Api } from "../api/api";
import { getGeneralApiProblem, GeneralApiProblem } from "../api/api-problem";

export class ListFriendsApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getListFriends(): Promise<ListFriendsResponse[] | GeneralApiProblem> {
    try {
      const response: ApiResponse<ListFriendsResponse[]> = await this.api.apisauce.get(
        `/list-friends`
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      return data as ListFriendsResponse[];
    } catch (e) {
      return { kind: "bad-data" };
    }
  }
}