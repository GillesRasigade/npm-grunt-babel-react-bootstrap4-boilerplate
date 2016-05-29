const React = require('react');

module.exports = React.createClass({
  render: function() {
    return <h1><i>Hello</i> {this.props.hello}</h1>;
  }
});
