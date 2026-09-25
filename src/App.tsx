import React from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/common/WhatsAppButton'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Proposal } from './components/sections/Proposal'
import { Services } from './components/sections/Services'
import { Process } from './components/sections/Process'
import { Projects } from './components/sections/Projects'
import { Technologies } from './components/sections/Technologies'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'
import { Contact } from './components/sections/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'

export const App: React.FC = () => {
  useScrollReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Proposal />
        <Services />
        <Process />
        <Projects />
        <Technologies />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
