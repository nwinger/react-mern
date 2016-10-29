import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/index';

class Dashboard extends Component {
  handleClick() {
    this.props.testAction();
  }

  render() {
    return (
      <div>
        <h4>This is the dashboard</h4>
        <a onClick={this.handleClick.bind(this)}>Knock, knock</a>
        <h3>{this.props.auth.message}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { testAction })(Dashboard);
// export default Dashboard;
