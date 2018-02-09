import {
  // GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  // ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  // EDIT_CAR_PENDING,
  EDIT_CAR_SUCCESS,
  // REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS

} from '../actions/cars'

const defaultState = [
  { id : '1625', year : '1993', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1696', year : '1990', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1822', year : '1977', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1477', year : '1991', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1186', year : '1975', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1751', year : '1990', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1995', year : '1991', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1291', year : '1999', make : 'Ford', model : 'Mustang', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1947', year : '1994', make : 'Toyota', model : 'Corolla', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1446', year : '1999', make : 'Toyota', model : 'Corolla', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1990', year : '1974', make : 'Toyota', model : 'Corolla', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
  { id : '1985', year : '2007', make : 'Toyota', model : 'Corolla', body_type : 'coupe', int_color : 'brown', price : '14,500', status : true },
]
/*
year
make
model
body_type
int_color
price
status
*/
export default (state = defaultState, action) => {
  switch (action.type) {
    // case GET_CARS_PENDING:
    //   return state
    case GET_CARS_SUCCESS:
      return [...action.payload.data]
    // case ADD_CAR_PENDING:
    //   return state
    case ADD_CAR_SUCCESS:
      return [...action.payload.data]
    // case EDIT_CAR_PENDING:
    //   return state
    case EDIT_CAR_SUCCESS:
      return [...action.payload.data]
    // case REMOVE_CAR_PENDING:
    //   return state
    case REMOVE_CAR_SUCCESS:
      return [].concat(defaultState.filter(car => car.id ))
    default:
      return state
  }
}
