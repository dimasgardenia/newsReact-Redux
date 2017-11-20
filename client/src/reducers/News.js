const defaultState = {
  news: {}
}

const NewsReducers = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOAD_NEWS':
    console.log('masuk reducers', action.payload.news)
      return {...state, news: action.payload.news}
    default:
    return state
  }
}

export default NewsReducers
