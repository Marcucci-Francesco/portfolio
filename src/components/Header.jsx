import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg glass-effect position-fixed top-0 start-0 w-100" style={{ height: '60px', zIndex: 1000 }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-dark d-flex align-items-center gap-2" to="/">
            <FontAwesomeIcon icon={faCode} size="lg" className='logo-hover' />
            Francesco Marcucci
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row gap-4 text-uppercase fw-semibold">
              <li className="nav-item">
                <Link to="/aboutme" className="nav-link nav-link-hover text-white">Qualcosa su di me</Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link nav-link-hover text-white">I miei progetti</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav-link-hover text-white">Contatti</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header


