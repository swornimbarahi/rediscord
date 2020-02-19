import { createContext } from "react";

export type AuthContextType = {
	loggedIn: boolean;
	token: string | null;
	email: string | null;
	username: string | null;
};

const AuthContext = createContext({});

export default AuthContext;
