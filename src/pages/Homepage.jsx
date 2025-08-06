import React from 'react'

const Homepage = () => {
  return (
    <main className="position-relative" style={{ height: '100vh' }}>

      <div className="d-flex h-100">
        <div className="bg-light" style={{ width: '33.33%', height: '100%' }}></div>
        <div className="bg-dark" style={{ width: '66.66%', height: '100%' }}></div>
      </div>

      <div
        className="bg-white position-absolute shadow rounded"
        style={{
          width: '1250px',
          height: '350px',
          top: '50%',
          left: 'calc(33.33% - 250px)',
          transform: 'translate(-7%, -30%)',
          zIndex: 10
        }}
      >
        <img src="me.png" alt="me" className="position-absolute"
          style={{
            width: '750px',
            height: '550px',
            top: '50%',
            left: 'calc(33.33% - 250px)',
            transform: 'translate(-24%, -68%)',
            zIndex: 10
          }} />
      </div>
    </main>
  )
}

export default Homepage


