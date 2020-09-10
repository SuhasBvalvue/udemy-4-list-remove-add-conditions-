import React from "react";

const person = props => {
	return (
		<div className="outset">
			<h1>Helllooo</h1>

			<p>
				My name is:{props.name} and age is:
				{props.age}
			</p>
			<button className="btn btn-danger" onClick={props.onClick}>
				Remove
			</button>
			<input type="text" onChange={props.changed} />
		</div>
	);
};
export default person;
