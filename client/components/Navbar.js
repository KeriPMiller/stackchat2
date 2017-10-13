import React, { Component } from 'react';
import NameEntry from './NameEntry';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../store';

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
};

const mapStateToProps = function (state, ownProps) {
  return {};
};

export function Navbar(props) {
  console.log(props);
  console.log(props.match.params.channelId);
  return (
    <nav>
      <h3># channelname goes here</h3>
      <NameEntry />
    </nav>
  );
}

const connectedNav = withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

export default connectedNav;
