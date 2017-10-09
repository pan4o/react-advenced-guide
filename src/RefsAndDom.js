import React from 'react';

class RefsAndDom extends React.Component {

	render () {

		return (
			<div>
				<AutoFocus />
			</div>
		);

	}

}

class CustomInput extends React.Component {

	constructor (props) {
		super(props);
		this.focus = this.focus.bind(this);
	}

	focus () {
		this.textInput.focus();
	}

	render () {
		return (
			<div>
				<input type="text" ref={thisInput => this.textInput = thisInput} />
				<button onClick={this.focus}>Focus the text input</button>
			</div>
		)
	}
}

class AutoFocus extends React.Component {

	componentDidMount() {
		this.textInput.focus();
	}

	render () {
		return (
			<CustomInput ref={thisInput => this.textInput = thisInput} />
		);
	}

}

export default RefsAndDom;

//https://habrahabr.ru/post/319510/
//https://reactjs.org/docs/refs-and-the-dom.html#refs-and-functional-components