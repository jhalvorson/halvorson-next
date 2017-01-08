import React, { Component } from 'react'
import HomePostPreview from './HomePostPreview'

export default class HomePostList extends Component {
  componentDidMount() {
    console.log('<HomePostList /> has mounted.')
  }
  render() {
    return (
      <div className="home-posts">
        <h2>Blogged dis shit</h2>
        {
          this.props.posts.map((post) =>
            <HomePostPreview
              key={post.id}
              post={post}
              />
          )
        }
        <style jsx>
        {`
          .home-posts {
            align-self: flex-start;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
          }
        `}
        </style>
      </div>
    )
  }
}
