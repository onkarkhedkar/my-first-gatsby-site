import * as React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import { StaticImage } from 'gatsby-plugin-image'
import { Container,Row, Col } from 'react-bootstrap'
import Demo from '../components/demo'
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';



const IndexPage = () => {
  return (

    
  


    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap"></div>
    
      
    <Layout pageTitle="Home Page">
    <Container><p>I'm making this by following the Gatsby Tutorial.</p>
    <Row>
      <Col lg={6}>
      <p><strong>Youtube video</strong></p>
      <div className='embed-responsive embed-responsive-16by9'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HEOWmSBE3p4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </Col>
    </Row>


    </Container>

      <StyledEngineProvider injectFirst>
       <Demo />
     </StyledEngineProvider>,
     

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="C:/Users/onkar/Pictures/Screenshots/Screenshot (42).png"
      />

    </Layout>
    </div>
  )
}

export default IndexPage