
import {
    LOGIN_START,
    LOGIN_SUCCESS
} from '../actions';
const initialState = {
    data: [],
    isLoggingIn: false
    // Array characters, Boolean fetching, null error.
  };

  export const rootReducer = (state=initialState, action)=> {
        switch (action.type) {
            case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
            case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                data: ['This is dummy data']
            }
                 
        default:
            return state;
      }
  }