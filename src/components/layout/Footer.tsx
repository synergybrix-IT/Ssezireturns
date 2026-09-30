const footerNavigation = {
  industries: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Services', href: '/services' },
  ],
  services: [
    { name: 'Customer Returns', href: '/services' },
    { name: 'Return Label Solutions', href: '/services' },
    { name: 'SSezi Fulfillment', href: '/services' },
    { name: 'FBA Services', href: '/services' },
    { name: 'Distribution Services', href: '/services' },
    { name: 'Trusted & Reliable Courier Service', href: '/services' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-20">
                <img src="/assets/imgs/template/logo1.webp" alt="SSezireturns" />
              </div>
              <p className="font-xs mb-20 color-white">
                We fuse our global network with our depth of expertise in air freight, ocean freight, railway transportation, trucking, and multimode transportation, also we are providing sourcing, warehousing, E-commercial fulfillment, and value-added service to our customers including kitting, assembly, customized package and business inserts, etc.
              </p>
            </div>
            <div className="col-lg-3">
              <h5 className="mb-10 color-brand-1">Industries</h5>
              <ul className="menu-footer">
                {footerNavigation.industries.map((item) => (
                  <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="mb-10 color-brand-1">Services</h5>
              <ul className="menu-footer">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 text-center text-lg-start">
                <span className="color-grey-300 font-md">Cosmic Web Solution 2024. All right reversed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
