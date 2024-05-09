import React from 'react'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

const Homepage = () => {
  return (
    <div className='bg-gray-50'>
      <Nav showButtons={true}/>
      <Header/>
    </div>
  )
}

export default Homepage
