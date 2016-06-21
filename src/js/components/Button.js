import React, { PropTypes } from 'react';

const AppStore = require('../stores/AppStore');
const AppActions = require('../actions/AppActions');

const Button = ({ title }) => {
  const sayHello = () => {
    // alert('Hello ');
    AppActions.ping('text');
  };

  console.log(8, title);

  return (<div><button className="button" onClick={sayHello}>{title} ezf ze </button></div>);
};

Button.propTypes = { title: PropTypes.string };
Button.defaultProps = { title: 'Title' };

module.exports = Button;
