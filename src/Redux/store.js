import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducer/rootReducer';
import { thunk } from 'redux-thunk'; // Import thunk as a named export

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
