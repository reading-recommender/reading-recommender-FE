import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/



import { axiosWithAuth } from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ABSOLUTE_FAILURE = "LOGIN_ABSOLUTE_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post("https://reading-recommender.herokuapp.com/api/login", creds)
        .then(res => {
            console.log("Login data", res.data);
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err))
}



export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILURE_FETCH = 'FAILURE_FETCH';


export const fetchQuestions = () => dispatch => {
    dispatch({ type : FETCH_QUESTIONS })
    axiosWithAuth()
        .get('http://localhost:3333/api/quizQuestions')
        .then(res => {
            dispatch({ type : SUCCESS_FETCH, payload: res.data })
                console.log("Fetch data", res.data);
            })
        .catch(err => {
            dispatch({type:FAILURE_FETCH})
            console.log("Axios call error", err);
        })
}