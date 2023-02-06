import { appConfig } from "../config/app";
import { authentication } from "./authentication";

const SuperAgent = require("superagent");

export const http = {
  get: async (url) => {
    try {
      let req = SuperAgent.get(appConfig.apiUrl + url).set(
        "Authorization",
        "Bearer " + localStorage.getItem("access_token")
      );
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
  post: async (url, data) => {
    try {
      let req = SuperAgent.post(appConfig.apiUrl + url)
        .send(data)
        .set("Authorization", "Bearer " + localStorage.getItem("access_token"));
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
  put: async (url, data) => {
    try {
      let req = SuperAgent.put(appConfig.apiUrl + url)
        .send(data)
        .set("Authorization", "Bearer " + localStorage.getItem("access_token"));
      let resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
};
