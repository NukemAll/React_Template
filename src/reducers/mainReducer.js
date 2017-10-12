import { handleActions } from 'redux-actions';

import * as Actions from '../constants/mainActions.js';

const initialState = {

};


export default handleActions({
    [Actions.TEST]: ( state, action ) => {
        return {...state};
    }

}, initialState)