export default function loggerMiddleware(store) {
    return next => action => {
        //if(action.type != "@@redux-websocket/RECEIVED_WEBSOCKET_DATA")
          console.log(action);
      
      return next(action);
    };
  }