import React from 'react'

interface ScrollIndicatorProps {
  progress: number
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ progress }) => {
  return (
    <div 
      className="scroll-indicator"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  )
}

export default ScrollIndicator