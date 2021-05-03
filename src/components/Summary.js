import React from 'react'
import developerdesign from "../images/developerdesign.svg";
import responsivedesign from "../images/responsivedesign.svg";
import innovativesolutions from "../images/innovativesolutions.svg";
import passion from "../images/passion.svg";
import './Summary.css'

import SummaryCard from './SummaryCard'
function Summary() {
  const descriptions = ['Development and Design', 'Responsive Layouts', 'Ideas and Solutions', 'Passion and Dedication']
  const imagePaths = [developerdesign, responsivedesign, innovativesolutions, passion]
  const details = Array(4).fill("Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations")
  console.log('details', details)
  let cards = []
  descriptions.forEach((description, index) => {
    console.log('hi')
    console.log(details[index])
    cards.push(
      <SummaryCard
        key={index}
        description={description}
        detail={details[index]}
        imagePath={imagePaths[index]}
      />
    )
  })
  console.log('cards', cards)
  return (
    <div className="summary">
      {cards}
      {/* <div class="container-fluid">
        <div class="my-row">


          <div class="responsive-summary">
            <div class="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
              <div class="responsive-img">
                <img class="img-responsive" src={responsivedesign}/>
              </div>
            </div>

            <div class="col-sm-4 col-md-4">
              <div class="responsive-description">
                <h3>Responsive Layouts</h3>
                <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="ideas-summary">
            <div class="col-sm-1 col-md-1">
              <div class="idea-img">
                <img class="img-responsive" src={innovativesolutions} />
              </div>
            </div>

            <div class="col-sm-4 col-md-4">
              <div class="idea-description">
                <h3>Ideas and Solutions</h3>
                <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
              </div>
            </div>
          </div>

          <div class="passion-summary">
            <div class="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
              <img class="img-responsive" src={passion} />
            </div>

            <div class="col-sm-4 col-md-4">
              <div class="passion-description">
                <h3>Passion and Dedication</h3>
                <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Summary;