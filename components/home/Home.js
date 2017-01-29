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
            font-weight: 400;
            font-size: 2rem;
          }

          .home-main {
            max-width:710px;
            display: block;
            margin: 0px auto;
            text-align: center;
            padding: 110px 30px 0;
            line-height: 1.4;

            span {
              display: block;
            }

            a {
              position: relative;

              &:before {
                position: absolute;
                top: 10px;
                width: 100%;
                background-color: var(--color-black);
                height: 2px;
              }
            }
          }
        `}
        </style>
      </div>
    )
  }
}
