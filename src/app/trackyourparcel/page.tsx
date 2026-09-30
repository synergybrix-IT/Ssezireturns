'use client'

import { useState } from 'react'

export default function TrackParcelPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(`Tracking information for: ${trackingNumber}`)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="box-pageheader-1 text-center">
          <span className="btn btn-tag">Track Parcel</span>
          <h2 className="color-brand-1 mt-15 mb-10">Track Your Parcel</h2>
          <p className="font-md color-white">Enter your tracking number to get real-time updates.</p>
        </div>

        <div className="row justify-content-center mt-50">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Tracking Number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-brand-1-big mt-3" type="submit">
                Track Now
              </button>
            </form>
            {result && (
              <div className="mt-4 p-3 bg-grey-100 rounded">
                <p>{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
