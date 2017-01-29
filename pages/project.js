import React, { Component, PropTypes } from 'react'
import Navigation from '../components/navigation/Navigation'

export default class Project extends Component {
  // Add some delay

   static async getInitialProps ({query: { slug } }) {
     await new Promise((resolve) => {
       setTimeout(resolve, 2400)
     })
     const getPost = await fetch(`http://halvorson-react:8888/wp-json/wp/v2/work?slug=${slug}&_embed`)
     const work = await getPost.json()
     return {
       work
     }
   }
  render() {
    const work  = this.props.work[0]

    var featuredImage = work.acf.feature_image.sizes.large;
    var articleHeader = {
        height: '400px',
        backgroundImage: 'url(' + featuredImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'centre',
        backgroundSize: 'cover'
    }

    return <article>
      <Navigation url={this.props.url}/>
      <header style={articleHeader}></header>
      <section className="content">
        <h1>{work.title.rendered}</h1>
      </section>
      <style jsx>
      {`
        header {
          height: 300px;
          background-color: var(--color-black);
          width: 100%;
          position: relative;
          top: 0;
          left: 0;
          margin-top: -136px;
          margin-bottom: 136px;
        }
      `}
      </style>
    </article>
  }
}

Project.propTypes = {

}
