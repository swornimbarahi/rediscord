import React from "react";
import { ComponentClass, FunctionComponent } from "react";

import AuthPage from "./pages/AuthPage";
import TitleBar from "./components/TitleBar";

type IntelligentRouteType = {
	privateRoute: boolean;
	component: ComponentClass<any> | FunctionComponent<any>;
};

const Routes: any = {
	"/": {
		privateRoute: false,
		component: <AuthPage />
	},
	"/asdf": {
		privateRoute: true,
		component: <TitleBar transparent={false}/>
	}
};


export default Routes;
