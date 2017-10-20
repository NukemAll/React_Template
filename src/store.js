import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers';
import middlewares from './middleware';


// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;