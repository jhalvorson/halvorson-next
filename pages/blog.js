import React, { Component } from 'react'
import Navigation from '../components/navigation/Navigation'
import PostPreview from '../components/blog/PostPreview'
import Footer from '../components/footer/Footer'

export default class Blog extends Component {
  static async getInitialProps () {
    const url = 'http://halvorson-react:8888/wp-json/wp/v2/'
    const getPosts = await fetch(`${url}posts?page=1&per_page=20&_embed`)
    let posts = await getPosts.json()
    return { posts }
  }
  render() {
    return <main>
        <Navigation url={this.props.url}/>
        {this.props.posts.map((post, index) =>
          <PostPreview
            key={post.id}
            post={post}
            index={index}
            />
        )}
        <Footer />
    </main>
  }
}
