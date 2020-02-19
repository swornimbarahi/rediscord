import React, { FunctionComponent, ComponentClass, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext, { AuthContextType } from "../../contexts/AuthContext";

export type IntelligentRouteProps = {
	privateRoute: boolean;
	exact: boolean;
	path: string;
	component: ComponentClass<any, any> | FunctionComponent<any>;
};

const IntelligentRoute: FunctionComponent<IntelligentRouteProps> = props => {
	const { privateRoute, exact, path, component } = props;

	const { state } = useContext(AuthContext) as {
		state: AuthContextType;
	};

	return privateRoute === state.loggedIn ? (
		<Route exact={exact} path={path} component={component} />
	) : (
		<Redirect to="/asdf" />
	);
};

export default IntelligentRoute;
