import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Navigation from '../components/navigation/Navigation'
import PostPreview from '../components/blog/PostPreview'
import PostCard from '../components/blog/PostCard'
import BlogHeader from '../components/blog/BlogHeader'
import Footer from '../components/footer/Footer'
import Categories from '../components/blog/Categories'

import WPAPI from 'wpapi'
var wp = new WPAPI({ endpoint: process.env.API });

export default class Blog extends Component {
  static async getInitialProps () {
    const url = process.env.API
    const getPosts = await fetch(`${url}/wp/v2/posts?page=1&per_page=3&_embed`)
    let posts = await getPosts.json()
    return { posts }
  }

  constructor() {
    super()

    this.state = {
      posts: [],
      loadingPosts: true,
      postsPagination: 1,
      postsPaginationTotal: {}
    }
    this.loadPosts = this.loadPosts.bind(this)
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts( pageNum = this.state.postsPagination, perPage = 12) {
      wp.posts().page(pageNum).perPage(perPage).offset(3).embed().then((posts) => {
        this.setState({
          loadingPosts: false,
          posts,
          postsPaginationTotal: parseInt(posts._paging.totalPages)
        })
      }).catch((err) => {
        console.log(err)
      })
  	}

  render() {
    console.log(process.env.API)
    return <main>
        <Navigation url={this.props.url}/>
        <BlogHeader />
        <Categories />
        <div className="container">
          {this.props.posts.map((post, index) =>
            <PostPreview
              key={post.id}
              post={post}
              index={index}
              />
          )}
        </div>
        <div className="container">
          <ul className="post-cards">
            {this.state.posts.map((post, key) =>
              <PostCard
                post={post}
                key={key} />
            )}
          </ul>
        </div>
        <div className="posts-loader"></div>
        <Footer />
        <style jsx>
        {`
          .post-cards {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
          }
        `}
        </style>
    </main>
  }
}
