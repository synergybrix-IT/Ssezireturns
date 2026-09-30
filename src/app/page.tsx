import Link from 'next/link'
import ServicesSlider from '@/components/sections/ServicesSlider'

const services = [
  {
    title: 'Railway Logistics',
    description: 'We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.',
    image: '/assets/imgs/page/homepage1/train.png',
  },
  {
    title: 'Sea Forwarding',
    description: 'We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.',
    image: '/assets/imgs/page/homepage1/cargo-ship.png',
  },
  {
    title: 'Air Freight Forwarding',
    description: 'We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.',
    image: '/assets/imgs/page/homepage1/plane.png',
  },
  {
    title: 'Land Transportation',
    description: 'We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.',
    image: '/assets/imgs/page/homepage1/delivery.png',
  },
  {
    title: 'Warehousing & Storage',
    description: 'We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.',
    image: '/assets/imgs/page/homepage1/warehouse.png',
  },
  {
    title: 'Packaging & Distribution',
    description: 'We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.',
    image: '/assets/imgs/page/homepage1/forklift.png',
  },
]

const features = [
  {
    title: 'Shipping Options',
    image: '/assets/imgs/page/homepage4/container.png',
  },
  {
    title: 'Customer Service',
    image: '/assets/imgs/page/homepage4/24-hours.png',
  },
  {
    title: 'Timely Deliveries',
    image: '/assets/imgs/page/homepage4/stopwatch.png',
  },
  {
    title: 'Tracking Systems',
    image: '/assets/imgs/page/homepage4/pallet.png',
  },
]

const highlights = [
  "If you are not interested in private courier services for your brand, then you can opt for India's biggest and government-authorized, India Post- Services",
  'Reverse pickups',
  'B2B & B2C logistics solutions',
  'Focused customer support',
  'Real time visibility of shipment',
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section d-block">
        <div className="banner-1 banner-4" style={{ backgroundImage: "url('/assets/imgs/page/homepage4/banner.png')" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <p className="font-md color-white mb-15">Logistics & Transportation</p>
                <h1 className="color-white mb-25">CUSTOMER FIRST</h1>
                <div className="row">
                  <div className="col-lg-9">
                    <p className="font-md color-white mb-20">
                      SSEZI Returns system is specially crafted to manage end-to-end order returns & distribution with complete efficiency.
                    </p>
                  </div>
                </div>
                <div className="box-button mt-30">
                  <Link className="btn btn-brand-1-big hover-up mr-40" href="/about">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Sliding Services Carousel */}
        <ServicesSlider services={services} />
      </section>

      {/* About Section */}
      <section className="section pt-60 pb-65">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="box-image-info-7">
                <img src="/assets/imgs/page/homepage4/1.jpg" alt="About SSezireturns" />
                <div className="quote shape-2" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="box-info-7">
                <span className="btn btn-tag">Who We Are?</span>
                <h2 className="color-grey-900 mb-30 mt-20">Globally Connected by Large Network</h2>
                <p className="font-md color-grey-900 mb-40">
                  We strive to become pioneers in the field, providing first quality and cost-effective service, and smart solutions to the market. Our 30 years&apos; experience in the shipping, transport and logistics industry is our strength, which support us to deliver our promises to our customers.
                </p>
                <div className="row">
                  <div className="col-lg-6 mb-30">
                    <h6 className="chart-title font-md-bold color-grey-900">Trachking Moving</h6>
                    <p className="font-xs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                  </div>
                  <div className="col-lg-6 mb-30">
                    <h6 className="support-title font-md-bold color-grey-900">24/7 Support</h6>
                    <p className="font-xs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="line-border mb-30 mt-70" />
      <section className="section mt-200 bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-request-quote-2">
                <h2 className="color-grey-900 mb-20 mt-15">Fast shipping with the most modern technology</h2>
                <p className="font-md color-grey-900 mb-35">
                  Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. We&apos;ve also made significant strides to tightly integrate technology with our processes, giving our clients greater visibility into every engagement.
                </p>
                <div className="row">
                  <div className="col-lg-6 mb-30">
                    <h6 className="chart-title font-md-bold color-grey-900">Boost your sale</h6>
                    <p className="font-xs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                  </div>
                  <div className="col-lg-6 mb-30">
                    <h6 className="chart-title font-md-bold color-grey-900">Boost your sale</h6>
                    <p className="font-xs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                  </div>
                  <div className="col-lg-6 mb-30">
                    <h6 className="feature2-title font-md-bold color-grey-900">Introducing New Features</h6>
                    <p className="font-xs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                  </div>
                  <div className="col-lg-6 mb-30">
                    <h6 className="feature3-title font-md-bold color-grey-900">Introducing New Features</h6>
                    <p className="font-xs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-form-request-quote-2">
                <div className="box-form-contact-leading">
                  <h2 className="title-favicon color-brand-2 mb-15">Request a Quote</h2>
                  <p className="font-md color-grey-700 mb-25">Please Fill All Inquiry To Get Your Total Price.</p>
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Your name *" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Your email *" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Number *" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea className="form-control" name="message" rows={5} placeholder="Message / Note" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Link className="btn btn-link-medium" href="/contact">
                        Contact Us
                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section pt-110 pb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row">
                {features.map((feature) => (
                  <div key={feature.title} className="col-xl-6 col-lg-12 col-md-6">
                    <div className="item-reason">
                      <div className="card-offer cardServiceStyle3 hover-up">
                        <div className="card-image">
                          <img src={feature.image} alt={feature.title} />
                        </div>
                        <div className="card-info">
                          <h5 className="color-brand-2 mb-15">{feature.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-info-pround box-whychooseus-3">
                <span className="btn btn-tag color-grey-900">Our Features</span>
                <h2 className="color-brand-2 mb-15 mt-20">Why choose us</h2>
                <p className="font-md color-grey-900">
                  Sustainability is an increasingly important factor for many customers when choosing a shipping company. Your shipping company can stand out by demonstrating a commitment to sustainable practices, such as using energy-efficient vehicles, reducing waste, and offsetting carbon emissions.
                </p>
                <div className="mt-30">
                  <ul className="list-ticks">
                    {highlights.map((highlight) => (
                      <li key={highlight} style={{ width: '100% !important' }}>
                        <svg className="w-12 h-12 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-30 text-start">
                  <Link className="btn btn-brand-2 mr-20" href="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact Section */}
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
