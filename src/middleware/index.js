import logger from './logger';
import {routingMiddleware} from './router';
import thunk from './thunk';

const middlewares = [logger, routingMiddleware, thunk];

export default middlewares;