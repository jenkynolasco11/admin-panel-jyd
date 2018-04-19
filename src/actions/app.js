import axios from 'axios'
import IO from 'socket.io-client'

import socketFunctions from '../socket-options'

import { getMessages } from './message'

export const TRY_LOGIN_SUCCESS = 'TRY_LOGIN_SUCCESS'
export const TRY_LOGIN_FAILED = 'TRY_LOGIN_FAILED'
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS'
export const GET_STATS_FAILED = 'GET_STATS_FAILED'
export const SOCKET_CONNECTION_FAILED = 'SOCKET_CONNECTION_FAILED'
export const SOCKET_CONNECTION_SUCCESS = 'SOCKET_CONNECTION_SUCCESS'
export const SOCKET_CONNECTION = 'SOCKET_CONNECTION'

export const loginUser = ({ user, pass }) => async dispatch => {
    const headers = {
        'content-type' : 'application/x-www-form-urlencoded'
    }

    // const form = new FormData()
    // form.append('user', user)
    // form.append('pass', pass)

    // const axiosConfig = { headers, data }
    const url = 'http://localhost:8000/auth/login'
    try {
        const { data } = await axios({
            url,
            method : 'POST',
            data : `user=${user}&pass=${pass}`,
            headers,
            withCredentials : true,
        })

        if(data.ok) return dispatch({ type : TRY_LOGIN_SUCCESS, payload : null })
    } catch (e) {
        console.log(e)
    }

    return dispatch({ type : TRY_LOGIN_FAILED, payload : null })
}

export const logoutUser = () => async dispatch => {
    const url = 'http://localhost:8000/auth/logout'
    try {
        const { data } = await axios.get(url)

        if(data.ok) console.log('YES')
    } catch (e) {
        console.log(e)
    }

    return dispatch({ type : TRY_LOGIN_FAILED, payload : null })
}

export const checkAuth = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:8000/auth/is-auth')

        if(data.ok) return dispatch({ type : TRY_LOGIN_SUCCESS, payload : data.user })
        console.log('uh oh... bad login')
    } catch (e) {
        console.log(e)
    }

    return dispatch({
        type : TRY_LOGIN_FAILED,
        payload : null
    })
}

export const getStats = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:8000/admin/stats')

        if(data.ok) return dispatch({ type : GET_STATS_SUCCESS, payload : data.data })
    } catch (e) {
        console.log(e)
    }

    return dispatch(getStats)
}

export const connectSocket = () => async dispatch => {
    let socket = null
    try {
        socket = IO()

        socketFunctions(socket, dispatch)
    } catch (e) {
        console.log(e)
    }

    dispatch({ type : SOCKET_CONNECTION, payload : socket })
}
