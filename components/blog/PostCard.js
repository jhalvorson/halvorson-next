import React, { Component, PropTypes } from 'react'
import Link from 'next/link'

export default class PostCard extends Component {
  render() {
    const { post } = this.props
    return <li>
      <Link href={`/post?slug=${post.slug}`} as={`/blog/${post.slug}`}>
        <a>
          <article>
            <h2 dangerouslySetInnerHTML={{__html:post.title.rendered}} />
            <p dangerouslySetInnerHTML={{__html:post.acf.overview}} />
            <span>{post.cat_names[0]}</span>
          </article>
        </a>
      </Link>

      <style jsx>
      {`
        li {
          display: flex;
          flex: 0 1 calc(33.333% - 30px);
          margin: 15px;
          background-color: var(--color-light-grey);
          padding: 0;
        }

        a {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        article {
          display: flex;
          flex: 1 0 auto;
          text-align: center;
          padding: 20px 25px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
        }

        h2 {
          font-size: 1.425rem;
          line-height: 1.9rem;
          padding-bottom: 40px;
          padding-top:20px;
        }

        p {
          color: var(--color-grey-text);
          font-size: 0.825rem;
          line-height: 1.2rem;
          padding-bottom: 40px;
        }

        span {
          color: var(--color-primary);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.8125rem;
          letter-spacing: 0.07rem;
          margin-top: auto;
        }
      `}
      </style>
    </li>
  }
}

PostCard.propTypes = {

}
