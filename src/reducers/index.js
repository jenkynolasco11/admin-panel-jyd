import car from './car'
import filtered from './filter'
import message from './message'
import app from './app'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

  const rootReducer = combineReducers({
    app,
    filtered,
    car,
    message,
    form: formReducer
  })

export default rootReducer
