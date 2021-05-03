import React from 'react';
import './Home.css';
import About from './About'
import Summary from './Summary'
import Porfolio from './Portfolio'
import Contact from './Contact'

function Home() {
  return (
    <div className="home">

      <div className="main">
        <div className="container-fluid">
          <div className="my-row">
            <div className="entry-banner text-center">
              <h1 id="hello">Hello, I'm</h1>
              <h1 id="name">XXXX</h1>
              <h1 id="person-description">UI Developer. UX Desinger. Problem Solver.</h1>
            </div>
          </div>

          {/* <div className="my-row text-center">
            <div className="banner-buttons">
              <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                <a className="btn btn-default btn-border" href="#about">Info</a>
              </div>

              <div className="col-sm-1 col-md-1">
                <a className="btn btn-default btn-border" href="#projects">Portfolio</a>
              </div>
            </div>
          </div> */}
          <div className="my-row text-center">
            <div className="banner-buttons">
              <a className="btn btn-default btn-border" href="#about">Info</a>

              <a className="btn btn-default btn-border" href="#projects">Portfolio</a>
            </div>

          </div>
        </div>
      </div>
      <About />
      <Summary />
      <Porfolio />
      <Contact />
    </div>
  )
}

export default Home;