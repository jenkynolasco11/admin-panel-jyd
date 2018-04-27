import car from './car'
import filtered from './filter'
import message from './message'
import app from './app'
import chat from './chat'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

  const rootReducer = combineReducers({
    app,
    filtered,
    car,
    message,
    chat,
    form: formReducer
  })

export default rootReducer
