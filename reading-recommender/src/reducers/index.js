import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GUEST_ACTIVE,
    GUEST_INACTIVE,
    SUBMIT_START,
    SUBMIT_SUCCESS,
    SUBMIT_FAIL
   

} from '../actions';
const initialState = {
    data: [],
    isLoggingIn: false,
    error: null,
    isLoading: false,
    guest: false,
    book: false

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
                loggingIn: false
            }
            case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
           
            case GUEST_ACTIVE: 
                return {
                ...state,
                guest: true
                }

            case GUEST_INACTIVE: 
            return {
            ...state,
            guest: false
            }
            case SUBMIT_START:
            return {
            ...state,
            isLoading: true
            }
            case SUBMIT_FAIL:
            return {
            ...state,
            isLoading: false
            }

            case SUBMIT_SUCCESS:
            return {
            ...state,
            book: action.payload,
            isLoading: false
            }
            
        default:
            return state;
      }
  }