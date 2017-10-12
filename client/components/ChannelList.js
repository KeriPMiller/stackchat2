import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
//import store from '../store';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
// FETCH THEM FROM THE SERVERRR
// const RANDOM_CHANNEL = '/channels/1';
// const GENERAL_CHANNEL = '/channels/2';
// const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

export function ChannelList(props) {

   // const { messages } = this.state;

  return (
    <ul>
    {/* WE WILL DO SOME MAPPING HERE TO GET ALL OF ZE CHANNELS */}
    {props.channels.map(channel => {
      return (
        <li key={channel.id}>
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span>{channel.name}</span>
            <span className="badge">{ props.messages.filter(message => message.channelId === channel.id).length }</span>
          </NavLink>
        </li>
      );
    })}


      {/* CREATE CHANNEL LIST ITEM */}
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );

}

/** Write your `connect` component below! **/

const mapStateToProps = (state) => {
  return {channels: state.channels,
          messages: state.messages };
};

const ChannelListContainer = connect(mapStateToProps)(ChannelList);

export default ChannelListContainer;
