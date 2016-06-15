import React from 'react';
import styles from './App.css';
import RenderNav from './Components/RenderNav.react.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <RenderNav />
    );
  }
}
