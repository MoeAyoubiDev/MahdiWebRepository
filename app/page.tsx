import Hero from '@/components/Hero'
import About from '@/components/About'
import Qualifications from '@/components/Qualifications'
import Specializations from '@/components/Specializations'
import TreatmentApproach from '@/components/TreatmentApproach'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Qualifications />
      <Specializations />
      <TreatmentApproach />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

