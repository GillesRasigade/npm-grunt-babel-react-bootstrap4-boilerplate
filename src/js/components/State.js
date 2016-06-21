import React, { PropTypes } from 'react';

const AppStore = require('../stores/AppStore');
const AppActions = require('../actions/AppActions');

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = AppStore.getState();

    AppStore.addChangeListener(() => {
      console.log(9, 'app store changed', AppStore.getState());
      // self.setState({ title: 'test' });
      this.setState(AppStore.getState());
    });
  }

  render() {
    return (<div>State: {this.state.title}</div>);
  }
}

Component.propTypes = { title: PropTypes.string };
Component.defaultProps = { title: 'Title' };

module.exports = Component;
