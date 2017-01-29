import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Router from 'next/router'
import { prefetch } from 'next/prefetch'

import WPAPI from 'wpapi'
var wp = new WPAPI({ endpoint: 'http://halvorson-react:8888/wp-json' });

export default class HomeProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      loaded: false,
      post: {},
      isReady: false,
      moving: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    let id = this.props.project.ID
    let type = this.props.project.post_type

    fetch(`${process.env.API}/wp/v2/${type}/${id}`)
    .then(function(response) {
      return response.json()
    })
    .then(post => {
      this.setState({
        post,
        loaded: true
      })
    })
  }

  handleClick(e) {
    e.preventDefault()

    this.setState({
      moving: true
    })
    setTimeout(() => {
      this.setState({
        active: true
      })
    }, 1000)


     Router.push(`/project?slug=${this.props.project.post_name}`, `/project/${this.props.project.post_name}`)
    prefetch(`/project?slug=${this.props.project.post_name}`)
    .then((page) => {
      return page
    })
    .then(page => {
      setTimeout(() => {
        this.setState({
          isReady: true
         });
       }, 2200);
    })
  }


  render() {
    var classes = classNames({
      'hero': true,
      'moving': this.state.moving,
      'expand': this.state.active,
      'ready': this.state.isReady
    })

    var articleClass = classNames({
      'expand': this.state.active
    })

    var transition = classNames({
      'transition': true,
      'begin-transition': this.state.active,
      'ready': this.state.isReady
    })

    var underlayClass = classNames({
      'underlay': this.state.isReady,
    })

    if(this.state.loaded == true) {
      var featuredImage = this.state.post.acf.feature_image.sizes.large;
      var workBG = {
          backgroundImage: 'url(' + featuredImage + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
      }
    }

    return <article className={articleClass}>
      {this.state.loaded ?
        <div className="inner">
          <div className={classes}
              onClick={this.handleClick}
              style={workBG}>
          </div>
          <div className={underlayClass}></div>
          <div className="content">
            <p>{this.props.project.post_title}</p>
            <span>{this.props.project.post_type}</span>
          </div>
          <div className={transition} style={workBG}></div>
        </div>
        :
        null
      }
      <style jsx>
      {`
        article {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 270px;
          position: relative;

          & > div {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          &.expand {
            /*position: absolute;
            top: 0;
            left: 0;*/
          }
        }

        .content {
          margin-left: 0px;
          z-index: 99;
          display: block;
          text-align: right;

          & p {
            font-size: 1.4rem;
          }

          & span {
            display: block;
          }
        }

        .hero {
          height: 200px;
          width: 200px;
          background: var(--color-black);
          position: absolute;
          left: 0;
          border-radius: 50%;

          &:hover {
            animation: grow 5s infinite;
          }

          & p {
            position: absolute;
            top: 46%;
            left: -6%;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 40px;
          }
        }

        .underlay {
          background-color: #FFF;
          width: 200vw;
          height: 200vh;
          left: -100vh;
          top: -100vh;
          position: absolute;
          z-index: 999;
        }

        .transition {
          position: fixed;
          height: 0px;
          width: 100%;
          bottom: 0;
          left: 0;
          background-color: var(--color-black);
          transition: .45s;
          transition-timing-function: cubic-bezier(0.64,-0.19, 0.39, 0.67);
          z-index: 1000;

          &.begin-transition {
            height: 100%;
          }

          &.ready {
            height: 400px;
            top: 0;
          }
        }

        @keyframes grow {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }


      `}
      </style>
    </article>
  }
}

HomeProject.propTypes = {

}
