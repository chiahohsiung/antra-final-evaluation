import React from 'react'
import './SummaryCard.css'
function SummaryCard(props) {
  const { title, detail, imagePath } = props
  return (
    <div className="summary-card">
      <div className="summary-card-content">
        <div className="text-center">
          <img className="summary-card-img" alt="summary-card-img" src={imagePath} />
        </div>

        <div className="summary-card-description">
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard;