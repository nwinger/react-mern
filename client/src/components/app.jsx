import React from 'react';
import Navigation from './navigation';

const App = props => (
  <div>
    <Navigation />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navigation />
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default App;
