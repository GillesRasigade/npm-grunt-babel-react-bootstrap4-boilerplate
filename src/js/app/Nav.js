const React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="navbar navbar-fixed-top navbar-dark bg-inverse">
      <a className="navbar-brand" href="#">{this.props.title}</a>
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>;
  }
});
