import { LOGIN, LOGOUT, REGISTER } from "../constants/authConstants";
import axios from "axios";

const login = (credentials: any) => {
	return async (dispatch: any) => {
    console.log(credentials);
		try {
			const response = await axios.post("http://localhost:3001/api/user/login", {
				email: credentials.email,
				password: credentials.password
      });
      console.log(response);
			dispatch({ type: LOGIN, payload: {
        loggedIn: true,
        email: credentials.email,
        token: response.data.token,
        username: response.data.username
       }
      });
		} catch (error) {
			console.error(error);
		}
	};
};

const logout = (credentials: JSON) => {
	return { type: LOGOUT, payload: credentials };
};

const register = (credentials: JSON) => {
	return { type: REGISTER, payload: credentials };
};

export { login, logout, register };
