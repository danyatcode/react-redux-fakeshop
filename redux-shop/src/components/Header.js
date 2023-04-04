import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui menu'>
      <div className='ui container center'>
        <Link to="react-redux-fakeshop/"><h2>Fake Shop</h2></Link> 
      </div>
    </div>
  )
}

export default Header
