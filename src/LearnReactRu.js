
import React from 'react';

var authorData = {
		avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bill_Gates_June_2015.jpg/267px-Bill_Gates_June_2015.jpg',
		name: 'Bill Gates'
	}

class LearnReactRu extends React.Component {
	render() {
		return (
			<div>
				<WelcomeHome name="Dude"/>
				<a href="https://learn-reactjs.ru/basics/components-and-props" target="_blank">2.5.4 Извлечение компонентов</a>
				<Comment author={authorData} text="Hello my name is Bill" />
				<a href="https://learn-reactjs.ru/basics/state-and-lifecycle">https://learn-reactjs.ru/basics/state-and-lifecycle</a>
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

function Comment(props) {
	return (
		<div className="comment">
			<div className="user-info">
				<Avatar user={props.author} />
				<UserInfo user={props.author} text={props.text}/>
			</div>
		</div>
	);
}

function Avatar(props) {
	return(
		<img src={props.user.avatarUrl} alt={props.user.name}/>
	);
}

function UserInfo(props) {
	return(
		<div>
			<p className="author-name">{props.user.name}</p>
			<p className="comment-text">{props.text}</p>
		</div>
	);
}

export default LearnReactRu;