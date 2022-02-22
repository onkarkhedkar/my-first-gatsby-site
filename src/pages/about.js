import * as React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const AboutPage = () => {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap"></div>


    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    </div>
  )
}

export default AboutPage