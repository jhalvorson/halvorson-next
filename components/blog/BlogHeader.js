import React, { Component, PropTypes } from 'react'
import PostCard from './PostCard'

export default class BlogHeader extends Component {
  constructor() {
    super()

    this.state = {
      searchResults: null,
      hasResults: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(`${this.term.value}`)

    fetch(`${process.env.API}/swp_api/search?s=${this.term.value}&engine=posts`)
      .then(function(response) {
        return response.json()
      })
      .then(response => {
        this.setState({
          searchResults: response,
          hasResults: true
        })
      })
      this.searchForm.reset()
  }

  handleClick(e) {
    e.preventDefault()
    console.log('clicked!')

    document.querySelector('.header-content h1')
    .classList
    .toggle('hidden')

    document.querySelector('form')
    .classList
    .toggle('hidden')
  }

  render() {
    return <header>
      <div className="header-block">
        <div className="header-content">
          <h1>Some of the badliest written content you've ever read on Web Development</h1>
          <button
            type="submit"
            onClick={this.handleClick}>
            <img src="/static/svg/search-button.svg"/>
          </button>
        </div>
        <form
          onSubmit={this.handleSubmit}
          ref={(form) => this.searchForm = form}
          className="hidden">
          <fieldset>
            <legend>Search for blog posts</legend>
            <input
              type="text"
              placeholder="Type some words then hit enter..."
              ref={(input) => this.term = input}/>
          </fieldset>
        </form>
      </div>

      {this.state.hasResults === true ?
        <div className="results">
          <div className="container">
            <ul className="post-cards">
              {this.state.searchResults.map((result, key) =>
                <PostCard
                  post={result}
                  key={key} />
              )}
            </ul>
          </div>
        </div>
        :
        null
      }

      <style jsx>
      {`
        /* Results - will be moved */

        .results {
          position: relative;
          width: 100%;
          text-align: center;
        }

        .post-cards {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
        }

        /* end results */

        .header-block {
          position: relative;
        }

        .header-content {
          /*position: absolute;*/
          margin: 60px auto;
          /*left: 50%;
          transform: translate(-50%, 0);*/
          text-align: center;
          width: 100%;

          & h1 {
            width: 50%;
            line-height: 1.4;
          }
        }

        h1 {
          width: 80%;
          display: inline-block;
          transition: .25s;

          &.hidden {
            opacity: 0;
          }
        }

        button {
          display: inline-block;
          float: right;
          background: none;
          border: 0;
          padding-right: 60px;
        }

        form {
          /*position: absolute;*/
          left: 50%;
          transform: translate(-50%, 0);
          transition: .25s;

          &.hidden {
            opacity: 0;
          }
        }
      `}
      </style>
    </header>
  }
}

BlogHeader.propTypes = {

}
