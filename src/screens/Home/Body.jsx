import React from 'react'

function Body() {
  return (
    <div
    style={{
        maxWidth: '1200px',
        margin: 'auto'
    }}> 
      <img
        src="/macbook.png"
        alt="Background"
        style={{
         width:'100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      </div>
  )
}

export default Body