import React, { Component, PropTypes } from 'react'
import Link from 'next/link'

export default class Categories extends Component {
  render() {
    return <div>
      <ul>
        <li>
          <Link href={`/blog-category?slug=wp-api`} as={`/blog/category/wp-api`}>
            <a>
              WP-API
            </a>
          </Link>
        </li>
        <li>WordPress</li>
        <li>FabFit</li>
        <li>Front-End</li>
        <li>Tutorials</li>
      </ul>
      <style jsx>
      {`
        ul {
          width: 100%;
        }

        li {
          display: inline-block;
          padding: 15px;
        }
      `}
      </style>
    </div>
  }
}

Categories.propTypes = {

}
