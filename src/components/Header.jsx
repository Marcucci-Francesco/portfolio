import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='bg-dark' style={{ height: 60 }}>
        <div className='d-flex justify-space-around'>
          <div className='d-flex align-items-center' style={{ height: 60 }}>
            <span className='text-white'>Qualcosa su di me</span>
            <span className='text-white'>I miei progetti</span>
          </div>
          <div className='d-flex align-items-center' style={{ height: 60 }}>
            <h1 className='text-warning'>PORTFOLIO</h1>
          </div>
          <div className='d-flex align-items-center' style={{ height: 60 }}>
            <span className='text-white'>Contatti</span>
            <span className='text-white'>Social</span>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header