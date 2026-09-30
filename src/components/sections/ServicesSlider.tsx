'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

export interface ServiceItem {
  title: string
  description: string
  image: string
  link?: string
}

interface ServicesSliderProps {
  services: ServiceItem[]
}

export default function ServicesSlider({ services }: ServicesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Update visible count based on viewport width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 1200) {
        setVisibleCount(4)
      } else if (width >= 992) {
        setVisibleCount(3)
      } else if (width >= 600) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const maxIndex = Math.max(0, services.length - visibleCount)

  // Adjust currentIndex when visibleCount changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
  }

  // Autoplay
  useEffect(() => {
    if (isPaused || isDragging || maxIndex === 0) return
    const interval = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused, isDragging, maxIndex, nextSlide])

  // Touch / Drag handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragOffset < -50) {
      nextSlide()
    } else if (dragOffset > 50) {
      prevSlide()
    }
    setDragOffset(0)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setDragOffset(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragOffset < -50) {
      nextSlide()
    } else if (dragOffset > 50) {
      prevSlide()
    }
    setDragOffset(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
    setIsPaused(false)
  }

  // Calculate slide dimensions with gap
  const gap = 24
  // Translate percentage or px based on index
  const translatePercent = (currentIndex * (100 / visibleCount))

  return (
    <div
      className="box-slider-homepage2 box-slider-homepage-4 custom-services-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container position-relative">
        {/* Left Arrow Button */}
        <button
          type="button"
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="slider-arrow-btn slider-arrow-prev"
        >
          <svg className="w-5 h-5 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          aria-label="Next Slide"
          onClick={nextSlide}
          className="slider-arrow-btn slider-arrow-next"
        >
          <svg className="w-5 h-5 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Viewport */}
        <div
          ref={sliderRef}
          className="slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            className="slider-track"
            style={{
              transform: `translateX(calc(-${translatePercent}% - ${currentIndex * (gap / visibleCount)}px + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
              display: 'flex',
              gap: `${gap}px`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="slider-item"
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
                  minWidth: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
                  maxWidth: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
                }}
              >
                <div className="card-offer card-offer-slide hover-up">
                  <div className="card-image-box">
                    <span className="card-icon-badge">
                      <img src={service.image} alt={service.title} />
                    </span>
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">{service.title}</h5>
                    <p className="font-sm color-grey-900 mb-25">{service.description}</p>
                    <div className="box-button-offer">
                      <Link className="btn btn-link font-sm color-brand-2 p-0" href={service.link || '/services'}>
                        View Details
                        <span className="ms-1">
                          <svg className="w-4 h-4 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="slider-pagination-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
