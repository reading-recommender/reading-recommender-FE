import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    GUEST_ACTIVE,
    GUEST_INACTIVE,
    FETCH_QUESTIONS,
    SUCCESS_FETCH,
    FAILURE_FETCH,

} from '../actions';
const initialState = {
    data: [],
    isLoggingIn: false,
    error: null,
    isLoading: false,
    guest: false,
    quizQuestions: []

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
            case FETCH_DATA_START:
             return {
                ...state,
                isLoading: true,
                error: null
            }
            case FETCH_DATA_SUCCESS:
             return {
                ...state,
                isLoading: false,
                data: action.payload,
                // .filter(price => price.type === "Gasoline - Regular")
                // .filter(
                //   price =>
                //     price.location === "US" || price.location === "State of Hawaii"
                // ),
                error: null
            }
            case FETCH_DATA_FAIL:
             return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
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
            
            case FETCH_QUESTIONS : return {
                ...state,
                fetchingQuestions: true,
                error: ''
            }
            
            case SUCCESS_FETCH : return {
                ...state,
                fetchingQuestions: false,
                error: '',
                quizQuestions: action.payload
            }
            
            case FAILURE_FETCH: return {
                ...state,
                error: 'This is an error'
              }
            
        default:
            return state;
      }
  }