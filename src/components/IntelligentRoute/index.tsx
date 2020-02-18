import React, { FunctionComponent, ComponentClass } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

type IntelligentRouteProps = {
	privateRoute: boolean;
	exact: boolean;
	path: string;
	component: ComponentClass<any, any> | FunctionComponent<any>;
	loggedIn: boolean;
};

const IntelligentRoute: FunctionComponent<IntelligentRouteProps> = props => {
	const { privateRoute, exact, path, component, loggedIn } = props;

	return privateRoute === loggedIn ? (
		<Route exact={exact} path={path} component={component} />
	) : (
		<></>
	);
};

const mapStateToProps = (state: any, props: IntelligentRouteProps) => {
	return {
		...props,
		loggedIn: state.loggedIn
	};
};

export default connect(mapStateToProps, null)(IntelligentRoute);
