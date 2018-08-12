import React from 'react'
import request from 'superagent'
import '../src/styles/index.scss'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {}
  }

  render() {
    return (
      <div className="mw7 center mt6 tc">
        <div className="f3 sans-serif near-black">
          Next.js boilerplate w/ Tachyons and SCSS
        </div>
      </div>
    )
  }
}
