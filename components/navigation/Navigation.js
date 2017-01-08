import React, { Component } from 'react'
import Link from 'next/link'

export default class Navigation extends Component {
  render() {
    return <nav>
      {this.props.url.pathname === "/" ?
        null
        :
        <Link href="/">
          <a>Home</a>
        </Link>
      }
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
      <style jsx global>
      {`
        @import url('https://cloud.typography.com/7647334/7021372/css/fonts.css');

        html {
          background-color: #FFF;
          color: #000;
          font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B", helvetica, sans-serif;
          font-size: 16px;
        }

        h1, h2, h3, h4 {
          font-family: "Gotham Narrow A", "Gotham Narrow B", helvetica, sans-serif;
        }

        a {
          color: #90a4ae;
          text-decoration: none;
          font-weight: bolder;
        }

      `}
      </style>
    </nav>
  }
}
