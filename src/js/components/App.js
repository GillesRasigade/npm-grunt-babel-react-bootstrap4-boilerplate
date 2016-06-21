import React, { PropTypes } from 'react';



const Component = ({ hello }) => (<h1><i>Hello</i> {hello}</h1>);

Component.propTypes = {hello: PropTypes.string };
Component.defaultProps = {hello: 'Title' };

module.exports = Component;
