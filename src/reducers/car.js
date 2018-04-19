import {
  // GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  // ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  // EDIT_CAR_PENDING,
  EDIT_CAR_SUCCESS,
  // REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS

} from '../actions/car'

export default (state = [], { type, payload }) => {
  switch (type) {
    // case GET_CARS_PENDING:
    //   return state
    case GET_CARS_SUCCESS:
      return [ ...payload ]
    // case ADD_CAR_PENDING:
    //   return state
    case ADD_CAR_SUCCESS:
      return [ ...payload ]
    // case EDIT_CAR_PENDING:
    //   return state
    case EDIT_CAR_SUCCESS:
      return [ ...payload ]
    // case REMOVE_CAR_PENDING:
    //   return state
    case REMOVE_CAR_SUCCESS:
      return [ ...payload ]
    default:
      return state
  }
}
