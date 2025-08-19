import React from 'react'
import { motion } from 'framer-motion'

const Aboutme = () => {
  // Animazioni
  const fadeUpCol = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }
  const titleIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay: 0.05 } }
  }
  const linesContainer = {
    hidden: {},
    show: { transition: { delayChildren: 0.25, staggerChildren: 0.12 } }
  }
  const line = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  }

  const lines = [
    "Qui puoi inserire la tua descrizione o un testo di presentazione più lungo.",
    "Puoi raccontare esperienze, interessi e ciò che ti appassiona nel lavoro.",
    "L’immagine e il testo sono allineati considerando l’header fisso."
  ]

  return (
    <main className="bg-dark main-under-header" style={{ height: '100vh' }}>
      <div className="container h-80 mt-5">
        <motion.div
          className="row h-100 align-items-start"
          variants={fadeUpCol}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center"
            variants={fadeUpCol}
          >
            <motion.img
              src="me.png"
              alt="me"
              className="aboutme-img"
              whileHover={{ scale: 1.03, boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            />
          </motion.div>


          <motion.div
            className="col-12 col-md-7 text-white d-flex flex-column justify-content-start p-5 pt-md-3"
            variants={fadeUpCol}
          >
            <motion.h1 className="text-danger mb-4 display-4" variants={titleIn}>
              Qualcosa su di me
            </motion.h1>

            <motion.div variants={linesContainer} initial="hidden" animate="show" className="fs-5">
              {lines.map((t, i) => (
                <motion.p key={i} variants={line} className="mb-2">{t}</motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default Aboutme









