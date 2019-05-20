import {/* we need our action types here*/ 
    FETCH_QUESTIONS,
    SUCCESS_FETCH,
    FAILURE_FETCH,
    }from "../actions";
    
    const initialState = {
     questions: [],
     fetchingQuestions: false,
     error: null
   };
    
    export const reduceQuestions = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_QUESTIONS : return {
            ...state,
            fetchingQuestions: true,
            error: ''
        }
        case SUCCESS_FETCH : return {
            ...state,
            fetchingQuestions: false,
            error: '',
            questions: action.payload
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