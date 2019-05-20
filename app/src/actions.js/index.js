
export const LOGIN_START = "LOGIN_START";

export const login = data => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))

}