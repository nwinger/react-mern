import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <div>
    <ul>
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
