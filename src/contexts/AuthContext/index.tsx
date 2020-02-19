import {createContext} from "react";

type AuthContextType = {
  loggedIn: boolean;
  token: string | null;
  email: string | null;
  username: string | null;
}

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  token: null,
  email: null,
  username: null
});

export default AuthContext;