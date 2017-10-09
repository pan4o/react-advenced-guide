import React from 'react';
import logo from './logo.svg';
import './App.css';
import RefsAndDom from './RefsAndDom';


class App extends React.Component {
    render() {
        return (
            <div className="container">
              <Logo src={logo}/>
              <BlueDataPicker/>
              <HelloWorld/>
              <NumberDescribe number={3} />
              <NumberDescribe number={4} />
              <MyContainer>
                <ul>
                  <li>
                    <Child fruit="Apple"></Child>
                  </li>
                  <li>Orange</li>
                  <li>Lime</li>
                </ul>
              </MyContainer>
              <TodoList/>
              <ListOfTenThings/>
              <CheckDefaultProps/>
              <CheckDefaultProps name={'Tom'}/>
              <RefsAndDom />
            </div>
        );
    }
}

class Logo extends React.Component {
  render () {
    return (
      <img src={this.props.src} className="logo" />
    );
  }
}

// Using DOT notation for JSX Type

const MyComponent = {
  dataPicker: function (props) {
    return <div>Imagine a {props.color} datapicker here.</div>
  }
}

function BlueDataPicker () {
  return <MyComponent.dataPicker color="blue" />
}

class HelloWorld extends React.Component {
  render () {
    return <Hello what={'World'} />
  }
}

function Hello (props) {
  return <div>Hello {props.what}</div>;
}

//JavaScript Expressions as Props

function NumberDescribe (props) {
  let description;
  if (props.number % 2) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }

  return <div>{props.number} is {description} number</div>
}

//childrends

function MyContainer(props) {
  return (
    <div>
      This is container for {props.children}
    </div>
  );
}

function Child(props) {
  return <span>{props.fruit}</span>
}

//JavaScript Expressions as Children

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList(props) {
  const todos = ['start startup','to be javascript guru', 'to be a millionaire'];

  return (
    <ul>
      { todos.map((todo) => <Item key={todo} message={todo} />) }
    </ul>
  );
}

//Functions as children

function Repeat(props) {
  let items = [];

  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }

  return <div>{items}</div>;
}


function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
        {(index) => <div>{index + 1} div</div>}
    </Repeat>
  );
}

//default props

class CheckDefaultProps extends React.Component {
  render () {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

CheckDefaultProps.defaultProps = {
  name: 'Bill'
}

//https://reactjs.org/docs/refs-and-the-dom.html


export default App;