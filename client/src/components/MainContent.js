import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../store/Index'


class MainContent extends Component {

  render () {
    return (
      <div>
        <h1>HAI, INI DIMAS</h1>
        <p>{JSON.stringify(this.props.index)}</p>
        {this.props.newslist.articles.map((data,i)=>{
          if (i == this.props.index) {
            return(
              <div>
              <p key={i}>{data.description}</p>
             <img src={data.urlToImage} alt="news Picture" />
           </div>
            )
          }
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    newslist: state.news.news
  }
}

const MainContentConnect = connect(
  mapStateToProps,
  null
)(MainContent)
export default MainContentConnect
// export default MainContent
