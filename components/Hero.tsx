'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
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
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 fade-in-section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="order-2 md:order-1 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-4 opacity-15 scale-105 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative w-80 h-[28rem] rounded-3xl overflow-hidden shadow-soft-lg ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/profile.png"
                  alt="Dr. Mahdi Kheir Din"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 md:order-2 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Dr. Mahdi{' '}
              <span className="text-primary-600">Kheir Din</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 font-semibold tracking-wide">
              Physiotherapist & Rehabilitation Specialist
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Helping you move better, recover faster, and live pain-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Book Consultation
              </a>
              <a
                href="https://wa.me/9613629670"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-1.08-2.03-1.205-.273-.124-.471-.185-.67.185-.197.37-.771 1.205-.945 1.453-.173.247-.347.278-.644.093-.297-.186-1.253-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

