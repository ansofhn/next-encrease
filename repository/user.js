import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  user: () => "/users",
  detailUser: (id) => `/users/${id}`,
  changePW: () => `/users/update-password`
};

const hooks = {
  getUser() {
    return useSwr(url.user(), http.get);
  },

  getDetailUser(id) {
    return useSwr(url.detailUser(id), http.get);
  },
};

const api = {
  editProfile: (id, data) => {
    return http.put(url.detailUser(id), data);
  },
  changePassword:(data) => {
    return http.post(url.changePW(), data)
  }
};

export const userRepository = { url, hooks, api };
