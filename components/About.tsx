'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 fade-in-section"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Dr. Mahdi
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            Dr. Mahdi believes that recovery begins with understanding each
            patient's unique condition and lifestyle. His treatment approach
            combines modern rehabilitation techniques, personalized therapy
            plans, and continuous patient guidance to ensure long-term recovery
            and injury prevention.
          </p>
        </div>
      </div>
    </section>
  )
}

