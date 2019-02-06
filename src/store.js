import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import winReducer from './reducers/winReducer'
import counterReducer from './reducers/counterReducer'

const reducer = combineReducers({
    counter: counterReducer,
    win: winReducer
  })

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store