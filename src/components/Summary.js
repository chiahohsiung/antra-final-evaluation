import React from 'react'
import developerdesign from "../images/developerdesign.svg";
import responsivedesign from "../images/responsivedesign.svg";
import innovativesolutions from "../images/innovativesolutions.svg";
import passion from "../images/passion.svg";

import SummaryCard from './SummaryCard'
import './Summary.css'


function Summary() {
  const titles = ['Development and Design', 'Responsive Layouts', 'Ideas and Solutions', 'Passion and Dedication']
  const imagePaths = [developerdesign, responsivedesign, innovativesolutions, passion]
  const details = [
    "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.",
    "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations",
    "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.",
    "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved."
  ]
  let cards = []
  titles.forEach((title, index) => {
    cards.push(
      <SummaryCard
        key={index}
        title={title}
        detail={details[index]}
        imagePath={imagePaths[index]}
      />
    )
  })

  return (
    <div className="summary">
      {cards}
    </div>
  )
}

export default Summary;