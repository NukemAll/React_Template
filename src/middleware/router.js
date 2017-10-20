import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux'; 

const history = createHistory();
const routingMiddleware = routerMiddleware(history);


export { routingMiddleware };
export { history };