import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <div className="frame bit-1 navigation_container">
    <h3 className="bit-40">Journey into React</h3>
    <ul className="bit-60 nav_menu">
      <li><Link to="dashboard">Dashboard</Link></li>
      <li><Link to="login">Login</Link></li>
    </ul>
  </div>
);

// class Navigation extends Component {
//   render () {
//     return (
//       <div>
//         <ul>
//           <li><Link to="dashboard">Dashboard</Link></li>
//           <li><Link to="login">Login</Link></li>
//         </ul>
//       </div>
//     );
//   }
// }

export default Navigation;
