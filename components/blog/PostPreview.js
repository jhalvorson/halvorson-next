import React, { Component } from 'react'
import Link from 'next/link'

export default class PostPreview extends Component {
  render() {
    const { post } = this.props
    //Get the featured image of the post
    const featuredImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
    let articleHeader = {
        backgroundImage: 'url(' + featuredImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'centre',
        backgroundSize: 'cover'
    }
    return <article>
      <Link href={`/post?slug=${post.slug}`} as={`/blog/post/${post.slug}`}>
        <a>
          <header style={articleHeader}>
            hi
          </header>
          <h4 dangerouslySetInnerHTML={{__html:post.title.rendered}} />
        </a>
      </Link>
    </article>
  }
}
