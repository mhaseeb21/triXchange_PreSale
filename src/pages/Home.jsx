import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Tokenomics from '../components/Tokenomics'
import PlatformArchitecture from '../components/PlatformArchitecture'
import Roadmap from '../components/Roadmap'
import PresaleDetails from '../components/PresaleDetails'
import UseCases from '../components/UseCases'
import SecurityAudit from '../components/SecurityAudit'
import FAQ from '../components/FAQ'
import LegalDisclaimer from '../components/LegalDisclaimer'
import TopBar from '../components/TopBar'
import PresaleCountdown from '../components/PresaleCountdown'

const Home = ({ toggleTheme, theme }) => {
  return (
    <>
          <TopBar />
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <Hero />
      <Features />
      <UseCases />
      <Tokenomics />
      <PresaleDetails />
      <PlatformArchitecture />
      <SecurityAudit />
      <Roadmap />
      <FAQ />
      <CTA />
      <LegalDisclaimer />
      <PresaleCountdown />
      <Footer />
    </>
  )
}

export default Home
