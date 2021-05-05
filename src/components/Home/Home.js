import React from 'react';
import './Home.css';
import Main from '../Main/Main'
import About from '../About/About'
import Summary from '../Summary/Summary'
import Porfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'


function Home() {
  return (
    <div className="home">
      <Main />
      <About />
      <Summary />
      <Porfolio />
      <Contact />
    </div>
  )
}

export default Home;