import React from 'react'
import './SummaryCard.css'
function SummaryCard(props) {
  const { title, detail, imagePath } = props
  return (
    <div className="summary-card">
      <div className="development-summary">

        <div className="development-img">
          <img className="img-responsive" src={imagePath} />
        </div>
        <div className="development-description">
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>

      </div>
    </div>

  )
}

export default SummaryCard;