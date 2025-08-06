import React from 'react'

const Homepage = () => {
  return (
    <main className="position-relative" style={{ height: '100vh' }}>

      <div className="d-flex h-100">
        <div className="bg-light" style={{ width: '33.33%', height: '100%' }}></div>
        <div className="bg-dark" style={{ width: '66.66%', height: '100%' }}></div>
      </div>

      <h1 className='position-absolute monoton-regular fs-1'
        style={{
          scale: '2',
          top: '24%',
          left: '10%',
          zIndex: 11
        }}>
        PORT
      </h1>

      <div
        className="bg-white position-absolute shadow rounded"
        style={{
          width: '1250px',
          height: '352px',
          top: '50%',
          left: 'calc(33.33% - 250px)',
          transform: 'translate(-7%, -40%)',
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

        <h1 className='position-absolute fs-1 text-center archivo-black-regular gradient-text'
          style={{
            width: '270px',
            scale: '2',
            top: '30%',
            left: '65%',
            zIndex: 11
          }}
        >
          WEB <br /> DEVELOPER
        </h1>
      </div>

      <h1 className='position-absolute monoton-regular fs-1 text-white'
        style={{
          scale: '2',
          top: '80%',
          left: '48%',
          zIndex: 11
        }}>
        FOLIO
      </h1>
    </main>
  )
}

export default Homepage



