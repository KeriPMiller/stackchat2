//ACTION TYPES
const WRITE_MESSAGE = 'WRITE_MESSAGE';

// ACTION CREATOR

export function writeMessage (message) {
  const action = { type: WRITE_MESSAGE, message };
  return action;
}

// REDUCER

export default function newMessageReducer (state = '', action) {
  switch(action.type) {
    case WRITE_MESSAGE:
    return action.message;
    default:
      return state;
    }
}
