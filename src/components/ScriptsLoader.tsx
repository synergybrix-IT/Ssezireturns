import Script from 'next/script'

const scripts = [
  { src: '/assets/js/vendors/jquery-migrate-3.3.0.min.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/bootstrap.bundle.min.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/waypoints.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/wow.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/magnific-popup.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/perfect-scrollbar.min.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/select2.min.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/isotope.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/scrollup.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/swiper-bundle.min.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/noUISlider.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/slider.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/counterup.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/jquery.countdown.min.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/jquery.elevatezoom.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/vendors/slick.js', strategy: 'afterInteractive' as const },
  { src: '/assets/js/main28b5.js?v=2.0.0', strategy: 'afterInteractive' as const },
]

export default function ScriptsLoader() {
  return (
    <>
      {scripts.map((script) => (
        <Script key={script.src} src={script.src} strategy={script.strategy} />
      ))}
    </>
  )
}
