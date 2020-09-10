import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		person: [
			{ id: "123", name: "suhas", age: 22 },
			{ id: "341", name: "Dipak", age: 42 },
			{ id: "431", name: "Rohan", age: 32 },
		],
		showAlert: false, //this is used for hide alart which we created
	};

	switchHandler = newName => {
		this.setState({
			person: [
				{ name: newName, age: 43 }, // this function will change the Name of middle value also other value on click
				{ name: "Arjun", age: 50 },
				{ name: "Manish", age: 42 },
			],
		});
	};

	toggleAlertHandler = () => {
		const doesShow = this.state.showAlert; //this function is for showing alart or hiding alert on click  of "Show alart"
		this.setState({ showAlert: !doesShow });
	};

	deleteperosnHandler = personIndex => {
		// this is used to remove paragraph by clicking on remove
		const person = [...this.state.person]; //this will access all person from state and add it in new array(it will create copy of array)
		person.splice(personIndex, 1); // this will delete one person from the state
		this.setState({ person: person }); //update in the state
	};

	//it will change according to input text
	allnamechangeHandler = (event, id) => {
		const personIndex = this.state.person.findIndex(p => {
			return p.id === id; //if p.id and state id is match then return
		}); //it will finding index of where we inputing text
		const pp = { ...this.state.person[personIndex] };
		pp.name = event.target.value;

		const person = [...this.state.person];
		person[personIndex] = pp;
		this.setState({ person: person });
	};

	nameChangeHandler = event => {
		this.setState({
			person: [
				{ name: "max", age: 43 },
				{ name: event.target.value, age: 50 }, // this will change the value on realtime input but not used in this program look older in git
				{ name: "Manish", age: 42 },
			],
		});
	};

	render() {
		let person = null;
		if (this.state.showAlert) {
			// this conditon will show hidden alart on click
			person = (
				<div
					className="alert alert-warning alert-dismissible fade show"
					role="alert"
				>
					<strong>Holy guacamole!</strong> You should check in on some of
					those fields below.
					<span aria-hidden="true">&times;</span>
				</div>
			);
		}

		return (
			<div className="App" className="alert alert-success">
				<br></br>
				<button
					className="btn btn-info"
					onClick={this.switchHandler.bind(this, "Min!!")}
				>
					Click this!
				</button>
				<br></br>
				<br></br>
				<button className="btn btn-info" onClick={this.toggleAlertHandler}>
					Show Alert
				</button>

				{this.state.person.map((person, index) => {
					return (
						<Person
							onClick={() => this.deleteperosnHandler(index)} //use function becouse passing data
							name={person.name}
							age={person.age}
							key={person.id}
							changed={event =>
								this.allnamechangeHandler(event, person.id)
							} //event will directly go to the function   //use function becouse of passing data
						></Person>
					);
				})}

				<div>{person}</div>
			</div>
		);
	}
}

export default App;
