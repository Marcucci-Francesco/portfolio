import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='glass-effect' style={{ height: 60 }}>
        <div className='d-flex justify-content-around'>
          <div className='d-flex align-items-center justify-content-around w-75 text-uppercase' style={{ height: 60 }}>
            <Link to={'/project'} className='d-flex justify-content-center text-dark nav text-decoration-none w-25 fw-semibold'>I miei progetti</Link>
            <Link to={'/aboutme'} className='d-flex justify-content-center text-dark nav text-decoration-none w-25 fw-semibold'>Qualcosa su di me</Link>
            <Link to={'/contact'} className='d-flex justify-content-center text-dark nav text-decoration-none w-25 fw-semibold'>Contatti</Link>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header