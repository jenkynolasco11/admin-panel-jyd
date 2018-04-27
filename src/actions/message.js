import axios from 'axios'

import store from '../store'

export const GET_MESSAGES_PENDING = 'GET_MESSAGES_PENDING'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const REMOVE_MESSAGE_PENDING = 'REMOVE_MESSAGE_PENDING'
export const REMOVE_MESSAGE_SUCCESS = 'REMOVE_MESSAGE_SUCCESS'
export const SET_SKIP_VALUE = 'SET_SKIP_VALUE'
export const SET_LIMIT_VALUE = 'SET_LIMIT_VALUE'


export const setLimitValue = payload => ({ type : SET_LIMIT_VALUE, payload })

export const getMessages = () => async dispatch => {
  try {
    const { message } = store.getState()

    const { data } = await axios.get(`http://localhost:8000/message/all?skip=${ message.skip }&limit=${ message.limit }`)

    if(data.ok) {
      dispatch({
        type : GET_MESSAGES_SUCCESS,
        payload : { ...data }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

export const setMessageToRead = ({ id, type }) => async dispatch => {
  try {
    const { data } = await axios.put(`/message/${ type }/read/${ id }`)

    if(data.ok) return dispatch(getMessages())
  } catch (e) {
    console.log(e)
  }
}

export const replyToMessage = ({ id, type, reply }) => async dispatch => {
  try {
    const { data } = await axios.post(`/message/reply`, { id, type, reply })

    if(data.ok) return dispatch(getMessages())
  } catch (e) {
    console.log(e)
  }
}

export const setSkipValue = skip => dispatch => {
  dispatch({ type : SET_SKIP_VALUE, payload : skip })

  dispatch(getMessages())
}
