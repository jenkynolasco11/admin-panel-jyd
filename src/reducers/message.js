import {
  // GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  // SEND_MESSAGE_PENDING,
  // SEND_MESSAGE_SUCCESS,
  // REMOVE_MESSAGE_PENDING,
  // REMOVE_MESSAGE_SUCCESS,
  SET_LIMIT_VALUE,
  SET_SKIP_VALUE,
} from '../actions/message'
import { debug } from 'util';

const defaultState = {
  messages : [],
  count : 0,
  limit : 10,
  skip : 0,
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    // case GET_MESSAGES_PENDING:
    //   return state
    case GET_MESSAGES_SUCCESS:
      return { ...state, messages : [...payload.messages], count : payload.count }
    case SET_LIMIT_VALUE:
      return { ...state, limit : payload }
    case SET_SKIP_VALUE:
      return { ...state, skip : payload }

    // case SEND_MESSAGE_PENDING:
    //   return state
    // case SEND_MESSAGE_SUCCESS:
    //   return [ ...action.payload ]
    // case REMOVE_MESSAGE_PENDING:
    //   return state
    // case REMOVE_MESSAGE_SUCCESS:
    //   return [].concat(state.filter(msg => msg.id !== action.payload ))
    default:
      return state
  }
}
