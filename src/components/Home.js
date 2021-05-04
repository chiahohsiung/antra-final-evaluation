import React from 'react';
import './Home.css';
import Main from './Main'
import About from './About'
import Summary from './Summary'
import Porfolio from './Portfolio'
import Contact from './Contact'


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