export const newsAction = (news) => {
  console.log('masuk actions', news)
  return {
    type: 'LOAD_NEWS',
    payload: {
      news
    }
  }
}
