import { LOGIN, LOGOUT, REGISTER } from "../constants/authConstants";

const initState = {
	loggedIn: false,
	token: null,
	username: "",
	email: ""
};

const authReducer = async (state = initState, action: any) => {
	switch (action.type) {
		case LOGIN:
			return { ...action.payload };
		case LOGOUT:
			return { loggedIn: false, token: null, username: "" };
		case REGISTER:
			return { ...state };
	}
};

export default authReducer;
