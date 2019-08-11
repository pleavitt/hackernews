import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    const { title, author } = this.props;
    return (
      <section className="navbar">
        <div className="title">
        HN<span>Paul</span></div>
        
      </section>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Navbar;
