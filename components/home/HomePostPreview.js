import React, { Component } from 'react'
import Link from 'next/link'

export default class HomePostPreview extends Component {
  render() {
    const { post } = this.props
    const featuredImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
    let articleHeader = {
        backgroundImage: 'url(' + featuredImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'centre',
        backgroundSize: 'cover',
    }
    return <article>
      <Link href={`/post?slug=${post.slug}`} as={`/blog/post/${post.slug}`}>
        <a>
          <div className="home-post-preview" style={articleHeader}>
            <h4 dangerouslySetInnerHTML={{__html:post.title.rendered}}/>
          </div>
        </a>
      </Link>
      <style jsx>
      {`
        .home-post-preview {
          display: flex;
          height: auto
        }
      `}
      </style>
    </article>
  }
}
