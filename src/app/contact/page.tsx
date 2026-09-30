'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div className="section d-block">
        <div className="box-map-contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.9796650016337!2d72.82235111744384!3d19.370913600000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae93a8d2cbc3%3A0x25424d9ca6da3925!2sSt.%20Alphonsa%20Forane%20Church%2C%20Vasai%20West!5e0!3m2!1sen!2sin!4v1705380687144!5m2!1sen!2sin"
            width="600"
            height="550"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mt-110" />

      <section className="section">
        <div className="container position-relative">
          <div className="box-cover-contactform">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="box-contactform-left">
                  <h3 className="color-brand-2 mb-15">Still have question?</h3>
                  <p className="font-md color-grey-900 mb-50">
                    Can&apos;t find the answer you are looking for? Please chat to our friendly team.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Your name *"
                            name="tname"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Your email *"
                            name="temail"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="tel"
                            placeholder="Your phone number"
                            name="tphone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Subject"
                            name="tsubject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message / Note"
                            rows={8}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn-brand-1-big" type="submit" disabled={status === 'loading'}>
                          {status === 'loading' ? 'Sending...' : 'Submit Now'}
                        </button>
                        {status === 'success' && (
                          <p className="mt-2 text-green-600">Thank you! Your message has been sent.</p>
                        )}
                        {status === 'error' && (
                          <p className="mt-2 text-red-600">Something went wrong. Please try again.</p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 position-relative">
                <div className="box-contactform-right">
                  <h5 className="color-brand-2 mb-35">Headquarters</h5>
                  <div className="map-info">
                    <img className="mb-25" src="/assets/imgs/template/logo1.webp" alt="SSezireturns" />
                    <p className="color-grey-700 mb-25">
                      Gonsalves property Near Alphonso church Behind Stella petrol pump Vasai West 401202
                    </p>
                    <p className="color-grey-700 mb-10">
                      <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Phone: +91 8149963472
                    </p>
                    <p className="color-grey-700 mb-30">
                      <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      Email: info@ssezireturns.com
                    </p>
                    <div className="line-border mb-25" />
                    <p className="color-grey-700 font-md-bold">
                      Available Hours <br />
                      Mon 10:00 am – 05:00 pm <br />
                      Tue 10:00 am – 05:00 pm <br />
                      Wed 10:00 am – 05:00 pm <br />
                      Thu 10:00 am – 05:00 pm <br />
                      Fri 10:00 am – 05:00 pm <br />
                      Sat 10:00 am – 03:00 pm <br />
                      Sun Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
