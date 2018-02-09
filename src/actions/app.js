export const TRY_LOGIN_SUCCESS = 'TRY_LOGIN_SUCCESS'
// import { TRY_LOGIN_SUCCESS } from './app';
export const TRY_LOGIN_FAILED = 'TRY_LOGIN_FAILED'

export const tryLogin = goToLogin => dispatch => {
    console.log(goToLogin)
    if(typeof goToLogin !== 'boolean') return

    dispatch({
        type : goToLogin ? TRY_LOGIN_SUCCESS : TRY_LOGIN_FAILED,
        payload : null
    })
}
