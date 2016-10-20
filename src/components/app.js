import React, { Component } from 'react';
import Navigation from './navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
