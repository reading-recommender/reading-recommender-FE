import axios, * as others from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL;"
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://reader-recommend.herokuapp.com/api/login', creds)
        .then(res => {
            console.log(`${res}`)
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAIL, payload: ''})
        })

}

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL;"
export const signUp = creds => dispatch => {
    dispatch({ type: SIGNUP_START });
    return axios
        .post('https://reader-recommend.herokuapp.com/api/signup', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SIGNUP_FAIL, payload: ''})
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
        dispatch({ type: FETCH_DATA_FAIL, payload: err.data})
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

