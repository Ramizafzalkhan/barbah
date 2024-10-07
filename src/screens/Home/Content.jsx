import React from 'react'
import Body from './Body'

function Content() {
  
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '100px auto',
        textAlign: 'center'
      }}>
      <h1 style={{
        marginBottom:'45px'
      }}>Unleash Your Gaming Potential And <br /> Conquer The Virtual Realm With Us!</h1>
      <p style={{
        maxWidth:'622px', margin:'auto'
      }}>Lorem Ipsum has been the industry`s standard dummy text ever since the  1800s,When an unknown printer took a gallary of type and scrambled it to make a type speciem book.It was survived not only five centuries</p>
    </div>
  )
}

export default Content