import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';	// Async Action Creators

import reducers from './reducers';

import logger from './middleware/logger';


let finalCreateStore;
let middlewares;

let store;
if (process.env.NODE_ENV === 'production') {
	middlewares = [thunk];
	finalCreateStore = applyMiddleware(...middlewares)(createStore);
	store = finalCreateStore(reducers)
	
} 
else{
	middlewares = [thunk, logger];
	finalCreateStore = applyMiddleware(...middlewares)(createStore);
	store = finalCreateStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	
}
export default store;

