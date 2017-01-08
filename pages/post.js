import React, { Component } from 'react'
import Navigation from '../components/navigation/Navigation'
import PostSingle from '../components/blog/PostSingle'

export default class Post extends Component {
  static async getInitialProps ({query: { slug } }) {
    const getPost = await fetch(`http://halvorson-react:8888/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const thisPost = await getPost.json()
    return {
      thisPost
    }
  }
  render() {
    return <article>
      <Navigation url={this.props.url} />
      <PostSingle
        post={this.props.thisPost[0]}
        />
    </article>
  }
}
