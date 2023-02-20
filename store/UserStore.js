import jwtDecode from "jwt-decode";
import { authentication } from "../utils/authentication";

export class UserStore {
  user = null;

  setUser() {
    try {
      const decodedToken = jwtDecode(authentication.isVerified());
      if (decodedToken) {
        this.user = decodedToken;
      } else {
        this.user = null;
      }
    } catch (error) {
      console.log(error, ":)")
    }
  }
}
