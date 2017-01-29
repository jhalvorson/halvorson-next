import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'


export default class Navigation extends Component {
  render() {
    return <div>
    <Head>
      <title>Jamie Halvorson</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/styles/base.css"/>
    </Head>
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
      <style jsx>
      {`
        ul {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 60px;
        }

        li {
          flex: 1 1 auto;

          &:nth-of-type(2) {
            text-align: center;
          }

          &:nth-of-type(3) {
            text-align: right;
          }
        }

        a {
          font-size: .9rem;
          font-weight: 500;
        }

      `}
      </style>
    </nav>
  </div>
  }
}
