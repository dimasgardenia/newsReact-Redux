import React, { Component } from 'react'
import { connect } from 'react-redux'
import {newsAction} from '../actions/NewsAct'
import { Route } from 'react-router-dom'
import store from '../store'


class MainContent extends Component {
  componentWillMount(){
    let params = this.props.match.params
    // debugger
  }
  render () {
    let { index } = this.props.match.params
    let { articles } = this.props.newslist
    return(
      <div>
        {
          articles == undefined ?
          "Loading" :
          articles[index].title
        }
    </div>
    )


  }
}

const mapStateToProps = (state) => {
  return {
    newslist: state.news.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newsAction: (news) => {
      return dispatch(newsAction(news))
    }
  }
}

const MainContentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent)

export default MainContentConnect
