import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='bg-dark' style={{ height: 60 }}>
        <div className='d-flex justify-content-around'>
          <div className='d-flex align-items-center justify-content-between w-25' style={{ height: 60 }}>
            <Link to={'/aboutme'} className='text-white'>Qualcosa su di me</Link>
            <Link to={'/project'} className='text-white'>I miei progetti</Link>
            <Link to={'/contact'} className='text-white'>Contatti</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header