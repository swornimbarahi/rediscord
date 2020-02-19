import React from "react";
import { IntelligentRouteProps } from "./components/IntelligentRoute";

import AuthPage from "./pages/AuthPage";


const Routes: IntelligentRouteProps[] = [
	{
		privateRoute: false,
		exact: true,
		path: "/",
		component: AuthPage
	},
	{
		privateRoute: false,
		exact: true,
		path: "/asdf",
		component: () => <div />
	}
];

export default Routes;
