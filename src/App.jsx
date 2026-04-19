import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'
import AboutUsSection from './components/about-us/AboutUsSection'
import AllVideos from './components/all-video'
import AllReels from './components/allreels'
import ClientReviews from './components/client-reviews'
import Contact from './components/contact'
import FAQ from "./components/faq"
import Footer from './components/footer'
import Hero from './components/hero'
import MyTeam from "./components/my-team"
import MyWorks from './components/my-works'
import Posters from './components/posters'
import TeamExpectationsSection from "./components/team-expectations-section"
import Navigation from './components/top-nav'
import { VideoCollage } from './components/video-collage'

const videos = [
  "https://xaviers.b-cdn.net/podcast.mp4",
  "https://xaviers.b-cdn.net/reel.mp4",
  "https://xaviers.b-cdn.net/sqare%203.mp4",
  "https://xaviers.b-cdn.net/sqare%202.mp4",
  "https://xaviers.b-cdn.net/trend.mp4",
  "https://xaviers.b-cdn.net/sqare.mp4",
  "https://xaviers.b-cdn.net/reel%202.mp4",
  "https://xaviers.b-cdn.net/sqare%206.mp4",
  "https://xaviers.b-cdn.net/sqare%204.mp4",
  "https://xaviers.b-cdn.net/sqare%205.mp4",
]

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      <main className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        <section className="py-4" id="home">
          <Hero />
        </section>

        <section className="py-4" id="works">
          <MyWorks />
        </section>

        <section className="py-4" id="video-collage">
          <VideoCollage videoLinks={videos} />
        </section>

        <section className="py-4" id="podcast">
          <Tabs defaultValue="video" className="w-full flex items-center">
            <TabsList className="flex gap-[5px]">
              <TabsTrigger className="text-[#ffffff] dark:text-white " value="video">Videos</TabsTrigger>
              <TabsTrigger className="text-[#ffffff] dark:text-white " value="reels">Reels</TabsTrigger>
            </TabsList>
            <TabsContent value="video">
              <AllVideos />
            </TabsContent>
            <TabsContent value="reels">
              <AllReels />
            </TabsContent>
          </Tabs>
          <div className="flex items-center justify-center py-8">
            <button
              className="see-more-btn"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="see-more-shimmer" aria-hidden="true" />
              <span className="see-more-content">
                Click to see more Work
              </span>
            </button>
          </div>
        </section>

        <section className="py-4">
          <Posters />
        </section>

        <section className="py-4" id="reviews">
          <ClientReviews />
        </section>

        <section>
          <MyTeam />
        </section>

        <section>
          <TeamExpectationsSection />
        </section>

        <section>
          <FAQ />
        </section>

        <section className="py-4" id="about">
          <AboutUsSection />
        </section>

        <section className="py-4" id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  )
}

export default App
