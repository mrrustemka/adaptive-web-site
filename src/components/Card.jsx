import React from 'react';

function Card({header, text, className}) {
  return (
    <div className={className}>
      <div>
        <h2>{header}</h2>
        <h4>{text}</h4>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default Card