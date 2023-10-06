import React from "react";
import { Link } from "react-router-dom";

export const Button = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="ml-auto">
				<Link to="/Form">
					<button className="btn btn-primary">Create New Contact</button>
				</Link>
			</div>
		</nav>
	);
};

