import jwtDecode from "jwt-decode";
import { authentication } from "../utils/authentication";

export class UserStore {
  user = null;

  setUser() {
    const decodedToken = jwtDecode(authentication.isVerified());
    if (decodedToken) {
      this.user = decodedToken;
    } else {
      this.user = null;
    }
  }
}
