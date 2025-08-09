import './App.css'
import ClientReviews from './components/client-reviews'
import Contact from './components/contact'
import ReviewSection from './components/countings'
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
      <div className='relative' id="works">
        <img src="/mywork1.gif" className='w-full mt-20' alt="Hero Image" />
        <p className='absolute top-[25%] left-[38%] text-7xl text-red-400 z-20 italic animate-fade-up'>
          <span className="inline-block">My Work</span>
        </p>
      </div>
      <MyWorks />
      {/* <ScenicGrid /> */}
      <div id="podcast">
        <PodcastFreeplay />
      </div>
      <div id="reviews">
        <ClientReviews />
      </div>
      <div>
        <Posters/>
      </div>
      <Contact />
    </div>
  )
}

export default App
