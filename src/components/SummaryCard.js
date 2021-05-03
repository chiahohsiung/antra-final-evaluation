import React from 'react'
import './SummaryCard.css'
function SummaryCard(props) {
  const {description, details, imagePath } = props
  return (
    <div className="summary-card">
      <div className="development-summary">
        <div className="col-sm-1 col-md-1">
          <div className="development-img">
            <img className="img-responsive" src={imagePath} />
          </div>
        </div>

        <div className="col-sm-4 col-md-4">
          <div className="development-description">
            <h3>{description}</h3>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SummaryCard;