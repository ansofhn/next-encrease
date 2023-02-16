import { makeAutoObservable } from "mobx";
import { appConfig } from "../config/app";
import { authentication } from "../utils/authentication";
import superagent from "superagent";

export class AuthStore {
  isLoggin = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(data) {
    let resp = await superagent.post(appConfig.apiUrl + "/auth/login", data);
    this.isLoggin = true;
    authentication.setAccessToken(resp.body.data.access_token);
  }

  logout() {
    authentication.clearAccesToken();
    this.isLoggin = false;
  }

  isAuthenticated() {
    authentication.isVerified() ? (this.isLoggin = true) : null;
  }
}
