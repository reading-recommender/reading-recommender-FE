import axios, * as others from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAILl;"
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://reading-recommender.herokuapp.com/api/login', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAIL, payload: ''})
        })

}

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"
export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA_START });
    axiosWithAuth()
    .get('https://reading-recommender.herokuapp.com/api/login')
    .then(res => {
        console.log(res)
       dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.data})
    })
    .catch(err => {
        console.log(err)
        //dispatch({ type: FETCH_DATA_FAIL, payload: err.data})
    })
}



export const GUEST_ACTIVE = "GUEST_ACTIVE"
export const guestActive = state => {
    return {
        type: GUEST_ACTIVE,
        payload: state
    }
}

export const GUEST_INACTIVE = "GUEST_INACTIVE"
export const guestInactive = state => {
    return {
        type: GUEST_INACTIVE,
        payload: state
    }
}




export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILURE_FETCH = 'FAILURE_FETCH';

export const fetchingQuestions = () => dispatch => {
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