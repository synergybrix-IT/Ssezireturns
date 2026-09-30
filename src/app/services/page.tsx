import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore SSezireturns logistics services including customer returns, fulfillment, distribution, and courier services.',
}

const services = [
  {
    title: 'Customer Returns',
    description: 'Customer Return Processing is the management of products that are returned by customers,When an inbound delivery for returns is created at the warehouse, the system automatically creates a customer return wherein the product details are scanned and mentioned in the inbound delivery reports by our dedicated team of individuals.',
    image: '/assets/imgs/page/blog/news1.png',
  },
  {
    title: 'Return Label Solutions',
    description: 'Make returns hassle-free with your very own dedicated and fully branded label portal!',
    image: '/assets/imgs/page/blog/news2.png',
  },
  {
    title: 'SSezi Fulfillment',
    description: 'Unlock the power of effortless fulfillment with SSezi Fulfillment, a premier service powered by the trusted SSezireturns network.',
    image: '/assets/imgs/page/blog/news3.png',
  },
  {
    title: 'FBA Services',
    description: 'We have several options available to receive and process your products, including the option to consolidate and ship your items back to you or back into FBA at a later date. We also offer services such as relabelling, disposal, donation, or liquidation.',
    image: '/assets/imgs/page/blog/news4.png',
  },
  {
    title: 'Distribution Services',
    description: 'We have several options available to receive and process your products, including the option to consolidate and ship your items back to you or back into FBA at a later date. We also offer services such as relabelling, disposal, donation, or liquidation.',
    image: '/assets/imgs/page/blog/news5.png',
  },
  {
    title: 'Trusted & Reliable Courier Service',
    description: 'SSezireturns handles the entire range of activities of a supply chain right from pickup and packing, to documentation, customs clearance and delivery. Our door to door services adds ease of operations to our customers. We cater to people from all walks of life across their international courier cargo & shipping needs and offer customized services to meet the requirements of Exporter and Importer with special needs or individuals seeking international courier services.',
    image: '/assets/imgs/page/blog/news6.png',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="box-pageheader-1 text-center">
            <span className="btn btn-tag">Who We Are</span>
            <h2 className="color-brand-1 mt-15 mb-10">Our Services</h2>
            <p className="font-md color-white">
              We are affiliated with Ezi Retuns- a Europe based Return management company and handle their returns, distribution and warehousing in India.
            </p>
          </div>
        </div>
      </section>

      <section className="section mt-70">
        <div className="container">
          <div className="row">
            {services.map((service) => (
              <div key={service.title} className="col-lg-4">
                <div className="card-blog-grid hover-up">
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                    <a className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</a>
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2">{service.title}</h5>
                    <p className="font-sm color-grey-500 mt-20">{service.description}</p>
                    <div className="line-border" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
