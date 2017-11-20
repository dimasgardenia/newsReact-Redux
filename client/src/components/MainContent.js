import React, { Component } from 'react'
import { connect } from 'react-redux'
import {newsAction} from '../actions/NewsAct'
import { Route } from 'react-router-dom'
import store from '../store'


class MainContent extends Component {
  componentWillMount(){
    let params = this.props.match.params
  }
  render () {
    let { index } = this.props.match.params
    let { articles } = this.props.newslist
    return(
      <div>
        {
          articles == undefined ?
          "Loading" :
          <div>
          <h2>{articles[index].title}</h2>
          <div className='grid'>
          <div className='col-sm-2'></div>
          <img src={articles[index].urlToImage} alt='imagenews' className='img-responsive' width='40%' />
          <br></br>
          <p text-align='justify'> { articles[index].description } </p>
          </div>
          </div>
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
