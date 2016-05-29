
import bootstrap from 'bootstrap';
import ReactDOM from 'react-dom';
import React from 'react';

import {sum,square,variable,MyClass} from './import';
// export for others scripts to use

console.log(square(5)); //25

var cred={
    name:'Ritesh Kumar',
    enrollmentNo:11115078
}

var x = new MyClass(cred);
console.log(x.getName());

var Nav = require('./app/Nav');
var Main = require('./Main');

ReactDOM.render(
  <Nav title={x.getName()}/>,
  document.getElementById('nav')
);

ReactDOM.render(
  <Main hello="World !"/>,
  document.getElementById('main')
);
