import {
  GET_MESSAGES_SUCCESS,
  SET_LIMIT_VALUE,
  SET_SKIP_VALUE,
} from '../actions/message'

const defaultState = {
  messages : [],
  count : 0,
  limit : 10,
  skip : 0,
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    
    case GET_MESSAGES_SUCCESS:
      return { ...state, messages : [...payload.messages], count : payload.count }
    case SET_LIMIT_VALUE:
      return { ...state, limit : payload }
    case SET_SKIP_VALUE:
      return { ...state, skip : payload }

    default:
      return state
  }
}
