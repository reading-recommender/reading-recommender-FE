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



export const SUBMIT_START = "SUBMIT_START"
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS"
export const SUBMIT_FAIL = "SUBMIT_FAIL"
export const handleSubmit = creds => dispatch => {
    dispatch({ type: SUBMIT_START });
    return axios
        .post('https://reader-recommend.herokuapp.com/recommend', creds)
        .then(res => {
            console.log(res)
            //localStorage.setItem("token", res.data.payload);
            dispatch({ type: SUBMIT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SUBMIT_FAIL, payload: ''})
        })

}

export const NEW_QUIZ = "NEW_QUIZ"
export const newQuiz = () => {
    return {
        type: NEW_QUIZ
        
    }
}

export const LOGOUT = "LOGOUT"
export const logOut = () => {
    return {
        type: LOGOUT
        
    }
}

