import React from 'react'
import VideoComponent from '../pages/VideoComponent'

const Sermons = () => {
  return (
    <div className='h-[100vh]'>
      <h1>Sermons</h1>
      {Array(3)
        .fill()
        .map((_, i) => (
          <VideoComponent key={i} />
        ))}
    </div>
  )
}

export default Sermons