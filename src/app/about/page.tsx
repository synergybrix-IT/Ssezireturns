import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about SSezireturns - affiliated with Ezi Returns, providing logistics and return management services in India.',
}

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="box-pageheader-1 text-center">
            <span className="btn btn-tag">Who We Are</span>
            <h2 className="color-brand-1 mt-15 mb-10">About Us</h2>
            <p className="font-md color-white">
              We are affiliated with Ezi Retuns- a Europe based Return management company and handle their returns, distribution and warehousing in India.
            </p>
          </div>
        </div>
      </section>

      <section className="section mt-100 mb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <h2 className="color-brand-2 mb-25">
                We are affiliated with Ezi Returns- a Europe based Return management company
              </h2>
              <p className="font-md color-grey-900 mb-20">
                Whatever you would like to send, we can make it materialize as long as it&apos;s legal. We offer every service you require to make sure everything will arrive properly and to give you complete pleasure, from parcels and critical documents to clothing, luggage, household transports, and more.
              </p>
              <p className="font-md color-grey-900 mb-20">
                You will value our company&apos;s high-caliber logistics services if you wish to import or export packages to locations around the globe.
              </p>
              <p className="font-md color-grey-900 mb-20">
                Any issue brought on by the constantly changing business environments of today can be addressed by our broad spectrum of express delivery alternatives.
              </p>
              <p className="font-md color-grey-900 mb-20">
                We are dedicated to continuously offering exceptional service quality, innovation, and trustworthiness.
              </p>
              <p className="font-md color-grey-900 mb-20">
                Our Mission is to be recognized as a responsible, prompt and courteous service to our customers.
              </p>
            </div>
            <div className="col-lg-6 position-relative mb-30">
              <div className="row align-items-end">
                <div className="col-lg-5 col-md-5 col-sm-5">
                  <img className="mb-20" src="/assets/imgs/page/about/img-about-1-1.png" alt="About us" />
                  <img src="/assets/imgs/page/about/img-about-1-2.png" alt="About us" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7">
                  <img src="/assets/imgs/page/about/img-about-1-3.png" alt="About us" />
                </div>
              </div>
              <div className="quote-center shape-2" />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-50" />

      {/* Newsletter Section */}
      <div className="section bg-map d-block">
        <div className="container">
          <div className="box-newsletter">
            <h3 className="color-brand-2 mb-20">Get in Touch</h3>
            <div className="row">
              <div className="col-lg-5 mb-30">
                <div className="form-newsletter">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Your name *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Your email *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Weight" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Height" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Message / Note" rows={5} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input className="btn btn-brand-1-big" type="submit" value="Submit Now" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-7 mb-30">
                <div className="d-flex box-newsletter-right">
                  <div className="box-map-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.9796650016337!2d72.82235111744384!3d19.370913600000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae93a8d2cbc3%3A0x25424d9ca6da3925!2sSt.%20Alphonsa%20Forane%20Church%2C%20Vasai%20West!5e0!3m2!1sen!2sin!4v1705380687144!5m2!1sen!2sin"
                      height="242"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <ul className="list-info-footer">
                    <li>
                      <div className="cardImage">
                        <span className="icon-brand-1">
                          <img src="/assets/imgs/page/homepage2/address.svg" alt="Address" />
                        </span>
                      </div>
                      <div className="cardInfo">
                        <h6 className="font-sm-bold color-grey-900">Address</h6>
                        <p className="font-sm color-grey-900">Gonsalves property Near Alphonso church Behind Stella petrol pump Vasai West 401202</p>
                      </div>
                    </li>
                    <li>
                      <div className="cardImage">
                        <span className="icon-brand-1">
                          <img src="/assets/imgs/page/homepage2/email.svg" alt="Email" />
                        </span>
                      </div>
                      <div className="cardInfo">
                        <h6 className="font-sm-bold color-grey-900">Email</h6>
                        <p className="font-sm color-grey-900">info@ssezireturns.com</p>
                      </div>
                    </li>
                    <li>
                      <div className="cardImage">
                        <span className="icon-brand-1">
                          <img src="/assets/imgs/page/homepage2/phone.svg" alt="Phone" />
                        </span>
                      </div>
                      <div className="cardInfo">
                        <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                        <p className="font-sm color-grey-900">+91 7559419514</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
