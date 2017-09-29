import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
              <Logo src={logo}/>
              <BlueDataPicker />
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

export default App;

//https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type
