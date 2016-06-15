import React from 'react';
// import styles from './style/app.css';
import RenderNav from './Components/RenderNav/RenderNav.react.jsx'

export default class GottaGo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RenderNav data={this.props} />
    );
  }
}
