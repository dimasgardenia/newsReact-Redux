import React, { Component } from 'react'
import store from '../store/Index'
import { newsAction }  from '../actions/NewsAct'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import MainContent from './MainContent'

//npm
import axios from 'axios'



class Sidebar extends Component {
  componentWillMount () {
    const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=e339ce0c756d41b4b750a34a5f778ccf'
    axios.get(url)
    .then(resp => {
      this.props.newsAction(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

    render () {
      {if (this.props.newslist.articles) {
        return (
          <div>
            <div>
          		<h1>Your News Today</h1>
                  <div role="tabpanel">
                      <div className="col-sm-3">
                          <div className="nav nav-pills brand-pills nav-stacked" role="tablist">
                              <ul>
                                {this.props.newslist.articles.map((data, i) => {
                                  return <Link to={`/${data.title}/${i}`}>
                                  <li
                                    // onClick={this.forLink.bind(this,data)}
                                    key={data.title}>{data.title}
                                  </li>
                                  </Link>
                                })}
                              </ul>
                          </div>
                      </div>
                  </div>
          	</div>
            <Route exact path='/' render={()=> <h1>HOME</h1>}/>
            <Route
              path='/:title/:index'
              render={({match})=>
              <MainContent title={match.params.title} index={match.params.index}>{this.props.params}</MainContent>}>
            </Route>
            {/* {this.props.newslist.articles.map((data,i) => {
              <Route path='/${data.title}/${i}' render= {() => <MainContent />}></Route>
            })} */}
          </div>
        )
      } else {
        return (
          <div>
            <h1>Loading....</h1>
          </div>
        )
    }}
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

const SidebarConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarConnect
