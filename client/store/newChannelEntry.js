//ACTION TYPES
const WRITE_CHANNEL = 'WRITE_CHANNEL';

// ACTION CREATOR

export function writeChannel (channel) {
  const action = { type: WRITE_CHANNEL, channel };
  return action;
}

// REDUCER

export default function newChannelReducer (state = '', action) {
  switch(action.type) {
    case WRITE_CHANNEL:
    return action.channel;
    default:
      return state;
    }
}
