import './App.css'
import AboutUsSection from './components/about-us/AboutUsSection'
import ClientReviews from './components/client-reviews'
import Contact from './components/contact'
import ReviewSection from './components/countings'
import Footer from './components/footer'
import Hero from './components/hero'
import MyWorks from './components/my-works'
import PodcastFreeplay from './components/podcast'
import Posters from './components/posters'
import Navigation from './components/top-nav'

function App() {
  return (
    <>
      {/* Sticky, blurred nav that stays readable over content */}
      {/* <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <Navigation />
      </div> */}

      {/* Mobile-first container: centered with responsive horizontal padding */}
      <main className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        {/* Space sections vertically with responsive padding */}
        <section className="py-8 sm:py-12">
          <Hero />
        </section>

        <section className="py-8 sm:py-12">
          <ReviewSection />
        </section>

        <section className="py-8 sm:py-12">
          <MyWorks />
        </section>

        <section className="py-8 sm:py-12">
          <PodcastFreeplay />
        </section>

        <section className="py-8 sm:py-12">
          <ClientReviews />
        </section>

        <section className="py-8 sm:py-12">
          <AboutUsSection />
        </section>

        <section className="py-8 sm:py-12">
          <Posters />
        </section>

        <section className="py-8 sm:py-12">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  )
}

export default App
