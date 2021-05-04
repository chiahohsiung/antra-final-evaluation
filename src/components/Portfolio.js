import React from 'react'
import './Portfolio.css'

import Project from './Project'
function Portfolio() {
  const projects = [];
  const titles = ['LUV TALK Website', 'Personal Website', 'Strike Zone Analysis']
  const details = [
    'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.',
    'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.',
    'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.'
  ]
  const titleClasses = ['luvtalk-project', 'personal-website-project', 'strike-zone-project']
  titles.forEach((title, index) => {
    projects.push(
      <Project 
        key={index}
        title={title} 
        detail={details[index]} 
        titleClass={titleClasses[index]}
      />
    )
  })
  return (
    <div className="projects" id="projects">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="projects-header">
              <h1>Projects and Portfolio</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="projects-header-quote">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>
        </div>

        <div className="project-container">
          {projects}
        </div>
        <div className="my-row">

            <div className="see-more-button">
              <a className="btn btn-default btn-border" href="#">More Projects</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;