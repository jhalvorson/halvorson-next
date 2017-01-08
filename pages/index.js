import React, { Component } from 'react'
import fetch from 'fetch-everywhere'

import Home from '../components/home/Home'
import HomePostList from '../components/home/HomePostList'
import Loader from '../components/loader/Loader'
import Navigation from '../components/navigation/Navigation'

export default class Index extends Component {
  static async getInitialProps () {
    const url = 'http://halvorson-react:8888/wp-json/wp/v2/'
    const getPages = await fetch(`${url}pages`)
    const getPosts = await fetch(`${url}posts?page=1&per_page=4&_embed`)
    let pages = await getPages.json()
    let posts = await getPosts.json()
    return { pages, posts }
  }

  render() {
    return <main>
      <Navigation url={this.props.url}/>
      {this.props.pages && this.props.posts ?
        <section className="home">
          <Home
            pages={this.props.pages}
          />
          <HomePostList
            posts={this.props.posts}
          />
        </section>
        :
        <Loader />
      }
      <style jsx>
      {`
        .home {
          display: flex;
          height: calc(100vh - 100px);
          align-items: flex-end;
        }
      `}
      </style>
    </main>
  }
}
