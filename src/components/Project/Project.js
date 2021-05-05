import React from 'react'
import './Project.css'
function Project(props) {
  const {title, detail, titleClass } = props;
  return (
    <div className="project-card text-center">
      <div className={titleClass}>
        <h3>{title}</h3>
        <p>{detail}</p>

        <div className="project-more-info">
          <a className="btn btn-default btn-border" href="#">More</a>
        </div>

      </div>
    </div>
  )
}

export default Project;