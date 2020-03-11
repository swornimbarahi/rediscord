import React from "react";
import { ComponentClass, FunctionComponent } from "react";

import AuthPage from "./pages/AuthPage";
import SideBar from "./components/SideBar";

type IntelligentRouteType = {
	privateRoute: boolean;
	component: ComponentClass<any> | FunctionComponent<any>;
};

const Routes: any = {
	"/": {
		privateRoute: false,
		component: <AuthPage />
	},
	"/messages": {
		privateRoute: true,
		component: <SideBar />
	}
};

export default Routes;
