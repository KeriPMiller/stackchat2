import { combineReducers,
        createStore,
        applyMiddleware
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import name from './name';
import messages from './messages';
import channels from './channels';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';
import currentChannel from './currentChannel';


const reducer = combineReducers({
  name,
  messages,
  channels,
  currentChannel,
  newChannelEntry,
  newMessageEntry
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

export * from './name';
export * from './messages';
export * from './channels';
export * from './newChannelEntry';
export * from './newMessageEntry';
export * from './currentChannel';
