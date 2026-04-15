import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'
import AboutUsSection from './components/about-us/AboutUsSection'
import AllVideos from './components/all-video'
import AllReels from './components/allreels'
import ClientReviews from './components/client-reviews'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import MyTeam from "./components/my-team"
import MyWorks from './components/my-works'
import Posters from './components/posters'
import Navigation from './components/top-nav'
import { VideoCollage } from './components/video-collage'
import TeamExpectationsSection from "./components/team-expectations-section"

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
              <TabsTrigger className="text-[#ffffff] bg-[#0e0e0e] dark:text-[#0e0e0e] dark:bg-white" value="video">Videos</TabsTrigger>
              <TabsTrigger className="text-[#ffffff] bg-[#0e0e0e] dark:text-[#0e0e0e] dark:bg-white" value="reels">Reels</TabsTrigger>
            </TabsList>
            <TabsContent value="video">
              <AllVideos />
            </TabsContent>
            <TabsContent value="reels">
              <AllReels />
            </TabsContent>
          </Tabs>
        </section>

        <section className="py-4">
          <Posters />
        </section>

        <section className="py-4" id="reviews">
          <ClientReviews />
        </section>

        <section>
          <MyTeam/>
        </section>

        <section>
          <TeamExpectationsSection/>
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
