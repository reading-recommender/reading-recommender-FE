import {/* we need our action types here*/ 
    LOGIN_SUCCESS,
    LOGIN_ABSOLUTE_FAILURE,
    LOGIN_START,
    FETCH_QUESTIONS,
    SUCCESS_FETCH,
    FAILURE_FETCH,
    }from "../actions";
    
    const initialState = {
     quizQuestions: [],
     fetchingQuestions: false,
     error: null,
     isLoggingIn: false
   };
    
    export const reduceQuestions = (state = initialState, action) => {
        switch (action.type) {
          case LOGIN_START: return {
            ...state,
            isLoggingIn: true,
            error: 'Cant login'
        }
        case LOGIN_SUCCESS: return {
            ...state,
            isLoggingIn: false,
        }
        case LOGIN_ABSOLUTE_FAILURE: return {
            ...state,
            isLoggingIn: true,
            error: 'Cant log in!'
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
    };
  
    export default reduceQuestions;