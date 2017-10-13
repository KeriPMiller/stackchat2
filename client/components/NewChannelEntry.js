import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { postChannel, writeChannel } from '../store';

// receives dispatch as an argument
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange: function(event){
      const newChannel= event.target.value;
      dispatch(writeChannel(newChannel));
    },
    handleSubmit: function (event){
      event.preventDefault();
      const name= event.target.channelName.value;
      dispatch(postChannel({name}));
    }
  };
}

// receives state as an argument
const mapStateToProps = function (state) {
  return {newChannelEntry: state.newChannelEntry};
}

export function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry}
          className="form-control"
          type="text" name="channelName"
          placeholder="Enter channel name"
          onChange={props.handleChange} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const newChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default newChannelEntryContainer
