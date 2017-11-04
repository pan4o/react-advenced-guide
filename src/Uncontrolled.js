import React from 'react';

class Uncontrolled extends React.Component {
	render () {
		return (
			<div>
				<NameForm />
			</div>
		);
	}
}

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler(event) {
		alert('Name was submit ' + this.input.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<label>
					Name:
					<input
						defaultValue="Bob" 
						type="text" 
						ref={(input) => {this.input = input}} 
					/>
				</label>
				<input type="Submit" value="Submit" />
			</form>
		);
	}
}

export default Uncontrolled;