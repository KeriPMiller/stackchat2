// ACTION TYPES
const GET_CURRENT_CHANNEL = 'GET_CURRENT_CHANNEL';

// ACTION CREATORS
export function getCurrentChannel(channelId){
  const action = {
    type: GET_CURRENT_CHANNEL,
    channelId
  };
  return action;
}

// REDUCER
export default function currentChannelReducer(state = '1', action){
  switch (action.type){
    case GET_CURRENT_CHANNEL:
      return action.channelId;
    default:
      return state;
  }
}
