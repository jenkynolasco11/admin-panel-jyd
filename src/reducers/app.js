import {
    TRY_LOGIN_SUCCESS,
    TRY_LOGIN_FAILED,
} from '../actions/app'

const defaultState = {
    logged : true
}

export default (state = defaultState, { type, payload }) => {
    // console.log('right here...', payload)
    switch(type){
        case TRY_LOGIN_FAILED:
            return { logged : false }
        case TRY_LOGIN_SUCCESS:
            return { logged : true }
        default:
            return state
    }
}
