import React, { Component } from 'react'
import fetch from 'fetch-everywhere'

import Home from '../components/home/Home'
import HomePostList from '../components/home/HomePostList'
import Loader from '../components/loader/Loader'
import Navigation from '../components/navigation/Navigation'
import HomeProject from '../components/home/HomeProject'

export default class Index extends Component {
  static async getInitialProps () {
    const url = process.env.API

    const githubCall = await fetch(`https://api.github.com/users/jhalvorson/events/public`)
    const getPages = await fetch(`${url}/wp/v2/pages?include=203`)
    let pages = await getPages.json()
    let github = await githubCall.json()
    return { pages, github }
  }

  render() {
    const { github } = this.props
    const projects = this.props.pages[0].acf.project_list
    return <main>
      <Navigation url={this.props.url}/>
      {this.props.pages ?
        <section className="home">
          <Home
            pages={this.props.pages}
          />
        {
        // github.map((event, key) =>
        //   <p>{event.type}</p>
        // )
        }
        <ul className="home-work">
          {
            projects.map((project, key) =>
            <li key={key}>
              <HomeProject
                project={project.select_project} />
            </li>
            )
          }
        </ul>
        </section>
        :
        <Loader />
      }
      <style jsx>
      {`
        .home-work {
          display: flex;
          list-style-type: none;
          margin-top: 200px;
          padding: 0 40px;

          & li {
            flex: 1 1 auto;
            /*position: relative;*/
          }
        }
      `}
      </style>
    </main>
  }
}
