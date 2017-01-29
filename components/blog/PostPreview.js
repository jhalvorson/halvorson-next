import React, { Component } from 'react'
import Link from 'next/link'

export default class PostPreview extends Component {
  render() {
    const { post } = this.props
    return <article className="featured-preview">
      <Link href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
        <a>
          <span>{post.cat_names[0]}</span>
          <h2 dangerouslySetInnerHTML={{__html:post.title.rendered}} />
          <p dangerouslySetInnerHTML={{__html:post.acf.overview}} />
        </a>
      </Link>
      <style jsx>
      {`
        .featured-preview {
          text-align: center;
          margin: 280px 0;
        }

        span {
          color: var(--color-primary);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.8125rem;
          letter-spacing: 0.07rem;
          margin-top: auto;
        }

        h2 {
          padding-top: 30px;
        }

        p {
          font-size: 1rem;
          color: var(--color-grey-text);
          padding-top:30px;
        }
      `}
      </style>
    </article>
  }
}
