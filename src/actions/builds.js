import axios from 'axios'

import store from '../store'

export const GET_BUILDS_PENDING = 'GET_BUILDS_PENDING'
export const GET_BUILDS_SUCCESS = 'GET_BUILDS_SUCCESS'
export const SEND_BUILD_PENDING = 'SEND_BUILD_PENDING'
export const SEND_BUILD_SUCCESS = 'SEND_BUILD_SUCCESS'
export const REMOVE_BUILD_PENDING = 'REMOVE_BUILD_PENDING'
export const REMOVE_BUILD_SUCCESS = 'REMOVE_BUILD_SUCCESS'
export const SET_SKIP_VALUE = 'SET_SKIP_VALUE'
export const SET_LIMIT_VALUE = 'SET_LIMIT_VALUE'

export const setLimitValue = payload => ({ type : SET_LIMIT_VALUE, payload })

export const getBuilds = () => async dispatch => {
    try {
        const { message } = store.getState()
        const { data } = await axios.get(`/car/build/all?skip=${ message.skip }&limit=${ message.limit }`)
        if (data.ok) {
            dispatch({
                type : GET_BUILDS_SUCCESS,
                payload : { ...data }
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export const setBuildToReviewed = ({ id }) => async dispatch => {
    try {
        const { data } = await axios.put(`/build/read/${ id }`)
        if (data.ok) {
            return dispatch(getBuilds())
        } 
    } catch (e) {
        console.log(e)
    }
}

export const deleteBuild = id => async dispatch => {
    try {
        const { data } = await axios.put(`/build/delete/{id}` )

        if (data.ok) {
            return dispatch(getBuilds())
        } 
    } catch (e) {
        console.log(e)
    }
}

export const setSkipValue = skip => dispatch => {
    dispatch({ type : SET_SKIP_VALUE, payload : skip })
    dispatch(getBuilds())
}
