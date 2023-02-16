import { AuthStore } from "./AuthStore";
import { UserStore } from "./UserStore";

export const store = {
  AuthStore: new AuthStore(),
  UserStore: new UserStore(),
};
