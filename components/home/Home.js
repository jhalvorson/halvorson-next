import React, { Component } from 'react'
import Link from 'next/link'

export default class Home extends Component {
  componentDidMount() {
    console.log('<Home /> has mounted.')
  }
  render() {
    const i = this.props.pages.findIndex((pages) => pages.slug === 'home')
    const thisPage = this.props.pages[i]
    return (
      <div className="home-main">
        <h1 dangerouslySetInnerHTML={{__html: thisPage.acf.intro_text}} />
        <style jsx>
        {`
          h1 {
            font-weight: 300;
            font-size: 2.6rem;
          }

          .home-main {
            max-width:640px;
            display: block;
            margin: 0px 30px;
            text-align: left;
          }
        `}
        </style>
      </div>
    )
  }
}
