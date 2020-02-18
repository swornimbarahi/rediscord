import React, { FunctionComponent, useState } from "react";

import Login from "../../components/Login";
import Register from "../../components/Register";

const AuthPage: FunctionComponent = () => {
	const [fpage, setFpage] = useState<boolean>(true);

	const changePage = () => {
		setFpage(!fpage);
	};

	return (
		<div>
			{fpage ? (
				<Login changePage={changePage} />
			) : (
				<Register changePage={changePage} />
			)}
		</div>
	);
};



export default AuthPage;
