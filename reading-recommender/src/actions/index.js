import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILURE_FETCH = 'FAILURE_FETCH';


export const fetchQuestions = () => dispatch => {
    dispatch({ type : FETCH_QUESTIONS })
    axios
        .get('http://localhost:3333/quizQuestions')
        .then(res => {
            dispatch({ type : SUCCESS_FETCH, payload: res.data })
                console.log("Fetch data", res.data);
            })
        .catch(err => {
            dispatch({type:FAILURE_FETCH})
            console.log("Axios call error", err);
        })
}