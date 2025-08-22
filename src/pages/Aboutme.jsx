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
    "💻 Chi sono\nSono Francesco Marcucci, Junior Front-End Developer con una forte passione per il mondo digitale. La mia strada verso il web non è stata immediata: ho iniziato come geometra, affinando precisione e attenzione al dettaglio, e ho lavorato come consulente di vendita, imparando quanto sia importante ascoltare e comprendere davvero i bisogni delle persone.",
    "\n\n🎨 Il cambiamento\nA un certo punto ho sentito il bisogno di esprimere la mia creatività in modo nuovo. Così ho deciso di mettermi in gioco intraprendendo un percorso di formazione come Web Developer. È stata una scelta di rivalsa e di crescita personale: finalmente potevo unire logica, estetica e tecnologia per dare forma ad esperienze digitali concrete.",
    "\n\n🚀 Cosa mi motiva\nOggi il mio obiettivo è trasformare idee in interfacce intuitive e accessibili. Ogni progetto è per me una sfida e un’opportunità: non solo per scrivere codice chiaro e funzionale, ma per creare esperienze digitali che le persone possano vivere con semplicità e piacere.",
    "\n\n🌟 La mia visione\nCredo che il web sia uno spazio in cui creatività e funzionalità si incontrano, e in cui il mio percorso, fatto di esperienze diverse ma complementari, trova finalmente la sua piena espressione."
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
              La mia storia
            </motion.h1>

            <motion.div variants={linesContainer} initial="hidden" animate="show" className="fs-8">
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









