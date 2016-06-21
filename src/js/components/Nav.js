const React = require('react');

const Nav = ({ title }) => (
  <div className="navbar navbar-fixed-top navbar-dark bg-inverse">
    <a className="navbar-brand" href="#">{title}</a>
    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current) </span></a>
      </li>
    </ul>
  </div>
);

Nav.propTypes = { title: React.PropTypes.string };
Nav.defaultProps = { title: 'Title' };

module.exports = Nav;
