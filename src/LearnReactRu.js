
import React from 'react';

class LearnReactRu extends React.Component {
	render() {
		return (
			<div>
				<WelcomeHome name="Dude"/>
				<a href="https://learn-reactjs.ru/basics/components-and-props" target="_blank">2.5.4 Извлечение компонентов</a>
			</div>
		);
	}
}

function GetName(props) {
	return <span>{props.name}</span>
}

class WelcomeHome extends React.Component {
	render () {
		return(
			<h2>
				Welcome home, <GetName name={this.props.name}/>
			</h2>
		);
	}
}

export default LearnReactRu;