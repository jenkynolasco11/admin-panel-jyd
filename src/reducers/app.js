import {
    TRY_LOGIN_SUCCESS,
    TRY_LOGIN_FAILED,
    GET_STATS_FAILED,
    GET_STATS_SUCCESS,
    // SOCKET_CONNECTION_FAILED,
    // SOCKET_CONNECTION_SUCCESS,
    SOCKET_CONNECTION
} from '../actions/app'

const defaultState = {
    logged : false,
    stats : { inbox : 0, toSell : 0, builds : 0, interested : 0, cars : 0 },
    socket : null,
}

export default (state = defaultState, { type, payload }) => {
    switch(type){
        case SOCKET_CONNECTION:
            return { ...state, socket : payload }
        case TRY_LOGIN_FAILED:
            return { ...state, logged : false }
        case TRY_LOGIN_SUCCESS:
            return { ...state, logged : true }
        case GET_STATS_SUCCESS:
            return { ...state, stats : { ...payload }}
        case GET_STATS_FAILED:
            return { ...state }
        default:
            return state
    }
}
