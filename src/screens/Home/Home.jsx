import React from 'react'
import Header from '../../components/partials/Header.jsx'
import Content from './Content.jsx'
import Image from './Image.jsx'
import Body from './Body.jsx'

const Home = () => {
  return (
    <div>
      <Image />
      <Header/>
      <Content />
      <Body />

    </div>
  )
}

export default Home