import {
    // GET_MESSAGES_PENDING,
    GET_BUILDS_SUCCESS,
    // SEND_MESSAGE_PENDING,
    // SEND_MESSAGE_SUCCESS,
    // REMOVE_MESSAGE_PENDING,
    // REMOVE_MESSAGE_SUCCESS,
    SET_LIMIT_VALUE,
    SET_SKIP_VALUE,
} from '../actions/builds'
  
const defaultState = {
    builds : [],
    count : 0,
    limit : 4,
    skip : 0,
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_BUILDS_SUCCESS:
        return { ...state, builds : [...payload.builds], count : payload.count }
        case SET_LIMIT_VALUE:
        return { ...state, limit : payload }
        case SET_SKIP_VALUE:
        return { ...state, skip : payload }
        default:
        return state
    }
}
