'use client'

import { useEffect, useRef } from 'react'

export default function TreatmentApproach() {
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

  const approaches = [
    'Personalized recovery programs',
    'Evidence-based therapy methods',
    'Hands-on manual therapy techniques',
    'Functional movement restoration',
    'Patient education & injury prevention',
  ]

  return (
    <section
      id="treatment-approach"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            Treatment Approach
          </h2>
          <div className="section-accent mb-12"></div>
        </div>
        <div className="glass rounded-3xl p-8 md:p-12 shadow-soft">
          <ul className="space-y-6">
            {approaches.map((approach, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-700 pt-1">
                  {approach}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

