
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
} from '../actions';
const initialState = {
    data: [],
    isLoggingIn: false,
    error: null,
    isLoading: false
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
        default:
            return state;
      }
  }