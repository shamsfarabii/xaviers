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
    <div>
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <ReviewSection />
      <MyWorks />
      <div id="podcast">
        <PodcastFreeplay />
      </div>
      <div id="reviews">
        <ClientReviews />
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <div>
        <Posters />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
