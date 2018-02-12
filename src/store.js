import { applyMiddleware, createStore } from 'redux'
// import { routerMiddleware } from 'react-router-dom'
// import { createHashHistory } from 'history'
import rootReducer from  './reducers'
// import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// create history
// const history = createHashHistory({
//   basname: '',
//   hashType: 'slash'
// })

export default(initialState) => {
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware/*, routerMiddleware(history)*/)
    )
}
