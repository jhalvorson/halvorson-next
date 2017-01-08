import React, { Component } from 'react'

export default class PostSingle extends Component {
  render() {
    const { post } = this.props
    return <section>
        <h1 className="post-title" dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
        <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </section>
  }
}
