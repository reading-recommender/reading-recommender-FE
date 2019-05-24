import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GUEST_ACTIVE,
    GUEST_INACTIVE,
    SUBMIT_START,
    SUBMIT_SUCCESS,
    SUBMIT_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    NEW_QUIZ
   

} from '../actions';
const initialState = {
    data: [],
    isLoggingIn: false,
    error: null,
    isLoading: false,
    guest: false,
    book: false,
    newUser: false,
    pending: false,
    submitFail: false

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
                error: action.payload,
                pending: false
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
            isLoading: true,
            submitFail: false
            }
            case SUBMIT_FAIL:
            return {
            ...state,
            isLoading: false,
            submitFail: true
            }

            case SUBMIT_SUCCESS:
            return {
            ...state,
            book: action.payload,
            isLoading: false
            }
            case SIGNUP_SUCCESS:
            return {
            ...state,
            newUser: true,
            pending: false
            }
            case SIGNUP_START:
            return {
            ...state,
            newUser: false,
            error: "User already exists, please select another username",
            pending: true
            }
            case SIGNUP_FAIL:
            return {
            ...state,
            newUser: false,
            error: "User already exists, please select another username",
            pending: true
            }
            case NEW_QUIZ:
            return {
            ...state,
            book: false
            }
            
            
        default:
            return state;
      }
  }