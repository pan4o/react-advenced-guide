import React from 'react';

class RefsAndDom extends React.Component {

	render () {

		return (
			<div>
				<AutoFocus />
				<GetFourth />
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
				<input type="text" ref={input => this.textInput = input} />
				<button onClick={this.focus}>Focus the text input</button>
			</div>
		)
	}
}

class AutoFocus extends React.Component {

	componentDidMount() {
		this.currentInput.focus();
	}

	render () {
		return (
			<CustomInput ref={input => this.currentInput = input} />
		);
	}

}

class Divs extends React.Component {
	render () {
		return (
			<div>
				<div ref={div => this.firstDiv = div}>1</div>
				<div ref={div => this.secondDiv = div}>2</div>
				<div ref={div => this.thirdDiv = div}>3</div>
				<div ref={div => this.fourthDiv = div}>4</div>
			</div>
		);
	}
}

class GetFourth extends React.Component {

	componentDidMount () {
		console.log(this.divs.fourthDiv); // <div>4</div>
	}

	render () {
		return (
			<Divs ref={div => this.divs = div} />
		);
	}
}

export default RefsAndDom;

//https://habrahabr.ru/post/319510/
//https://reactjs.org/docs/refs-and-the-dom.html#refs-and-functional-components