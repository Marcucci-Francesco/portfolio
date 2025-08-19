import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header>
      <nav className="navbar navbar-expand-lg glass-effect position-fixed top-0 start-0 w-100" style={{ height: '60px', zIndex: 1000 }}>
        <div className="container-fluid">

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Link
                className={`navbar-brand fw-bold d-flex align-items-center gap-2 ${isHome ? "text-dark" : "text-white"}`}
                to="/"
              >
                <FontAwesomeIcon
                  icon={faCode}
                  size="lg"
                  className={`logo-hover ${isHome ? "text-dark" : "text-white"}`}
                />
                Francesco Marcucci
              </Link>
            </motion.div>
          </AnimatePresence>


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


