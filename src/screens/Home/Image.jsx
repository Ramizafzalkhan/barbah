import React from 'react'

function Image() {
  return (
    
    <div style={{ position: 'absolute', bottom:'300px', left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <img
        src="/background.png"
        alt="Background"
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />

    </div>
  )
}

export default Image