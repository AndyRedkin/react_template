import React, { Component, Fragment } from 'react';
import '../assets/styles/index.scss'
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Fragment>
          <p>React app template</p>
          <Link to={'/'}>root</Link>
        </Fragment>
    );
  }
}

export default App;