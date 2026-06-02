import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'
import AboutUsSection from './components/about-us/AboutUsSection'
import AllVideos from './components/all-video'
import AllReels from './components/allreels'
import { BackgroundGrid } from './components/background-grid'
import ClientReviews from './components/client-reviews'
import ContentPartnerSection from './components/content-partner-section'
import Contact from './components/contact'
import FAQ from "./components/faq"
import Hero from './components/hero'
import MyTeam from "./components/my-team"
import MyWorks from './components/my-works'
import Posters from './components/posters'
import TeamExpectationsSection from "./components/team-expectations-section"
import Footer from './components/footer'
import Navigation from './components/top-nav'
import { VideoCollage } from './components/video-collage'

const videos = [
  "https://xaviers.b-cdn.net/videos/podcast.mp4",
  "https://xaviers.b-cdn.net/videos/reel.mp4",
  "https://xaviers.b-cdn.net/videos/square_3.mp4",
  "https://xaviers.b-cdn.net/videos/square_2.mp4",
  "https://xaviers.b-cdn.net/videos/trend.mp4",
  "https://xaviers.b-cdn.net/videos/sqare.mp4",
  "https://xaviers.b-cdn.net/videos/reel_2.mp4",
  "https://xaviers.b-cdn.net/videos/sqare%206.mp4",
  "https://xaviers.b-cdn.net/videos/sqare%204.mp4",
  "https://xaviers.b-cdn.net/videos/sqare%205.mp4",
]

function App() {
  return (
    <>
      <BackgroundGrid />

      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      <main className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        <section className="py-4" id="home">
          <Hero />
          <ContentPartnerSection />
        </section>

        <section className="py-4 flex flex-col items-center" id="works">
          <div
            className="
    mb-6 inline-flex items-center gap-2 rounded-full
    border border-[rgba(255,122,60,0.26)]
    bg-[rgba(255,122,60,0.08)]
    px-3.5 py-2
    text-xs font-extrabold uppercase tracking-[1.8px]
    text-[#ff8a4c]
    before:h-[7px] before:w-[7px] before:rounded-full
    before:bg-[#ff7a3c]
    before:shadow-[0_0_18px_rgba(255,122,60,0.9)]

    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.03]
    hover:shadow-[0_8px_24px_rgba(255,122,60,0.18)]
    hover:border-[rgba(255,122,60,0.4)]
  "
          >
            Our Works
          </div>
          <MyWorks />
        </section>

        <section className="hidden py-4 md:block" id="video-collage">
          <VideoCollage videoLinks={videos} />
        </section>

        <section className="py-4" id="podcast">
          <Tabs defaultValue="video" className="w-full flex items-center">
            <TabsList className="flex gap-[5px] !bg-white/[0.06] border border-white/[0.09] backdrop-blur-sm">
              <TabsTrigger
                className="text-[#F5EFE2]/70 data-[state=active]:!bg-[linear-gradient(135deg,#ff7a3c,#ff3f3f)] data-[state=active]:!text-[#F5EFE2] data-[state=active]:!border-transparent data-[state=active]:shadow-[0_8px_24px_rgba(255,122,60,0.30)]"
                value="video"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                className="text-[#F5EFE2]/70 data-[state=active]:!bg-[linear-gradient(135deg,#ff7a3c,#ff3f3f)] data-[state=active]:!text-[#F5EFE2] data-[state=active]:!border-transparent data-[state=active]:shadow-[0_8px_24px_rgba(255,122,60,0.30)]"
                value="reels"
              >
                Reels
              </TabsTrigger>
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
              onClick={() => {
                //Target to new tab
                window.open("https://www.behance.net/xaviermedia", "_blank");
              }}
            >
              <span className="see-more-shimmer" aria-hidden="true" />
              <span className="see-more-content">
                Click to see more Work
              </span>
            </button>
          </div>
        </section>

        <section className="py-4 flex flex-col items-center">
          <div
            className="
    mb-6 inline-flex items-center gap-2 rounded-full
    border border-[rgba(255,122,60,0.26)]
    bg-[rgba(255,122,60,0.08)]
    px-3.5 py-2
    text-xs font-extrabold uppercase tracking-[1.8px]
    text-[#ff8a4c]
    before:h-[7px] before:w-[7px] before:rounded-full
    before:bg-[#ff7a3c]
    before:shadow-[0_0_18px_rgba(255,122,60,0.9)]

    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.03]
    hover:shadow-[0_8px_24px_rgba(255,122,60,0.18)]
    hover:border-[rgba(255,122,60,0.4)]
  "
          >
            Our Designs
          </div>
          <Posters />
        </section>

        <section className="py-4" id="reviews">
          <ClientReviews />
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

        <section>
          <MyTeam />
        </section>

        <section className="py-4" id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
