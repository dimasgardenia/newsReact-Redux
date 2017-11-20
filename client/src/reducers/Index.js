import { combineReducers } from 'redux'

import NewsReducers from './News'

const rootReducer = combineReducers({
  news: NewsReducers
})

export default rootReducer
