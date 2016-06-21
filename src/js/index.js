import bootstrap from 'bootstrap';
import ReactDOM from 'react-dom';
import React from 'react';

var Nav = require('./components/Nav');
var Button = require('./components/Button');
var State = require('./components/State');
var App = require('./components/App');

ReactDOM.render(<Nav />, document.getElementById('nav'));

ReactDOM.render(<Button/>, document.getElementById('button'));
ReactDOM.render(<State/>, document.getElementById('state'));

ReactDOM.render(<App hello="World !"/>, document.getElementById('main'));
