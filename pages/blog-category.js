import React, { Component } from 'react'
import Navigation from '../components/navigation/Navigation'

export default class BlogCategory extends Component {
  render() {
    return <main>
      <Navigation url={this.props.url}/>
    </main>
  }
}
