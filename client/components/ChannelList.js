import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export function ChannelList(props) {


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

const ChannelListContainer = withRouter(connect(mapStateToProps)(ChannelList));

export default ChannelListContainer;
