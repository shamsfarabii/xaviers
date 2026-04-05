import { Suspense } from 'react'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoCollage } from './components/video-collage'
import AllVideos from './components/all-video'
import AllReels from "./components/allreels"

const TabFallback = () => (
  <div className="flex items-center justify-center py-12 text-gray-400">Loading...</div>
)
function App() {
  const videos = [
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/podcast.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/reel.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/sqare%203.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/sqare%202.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/trend.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/sqare.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/reel%202.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/sqare%206.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/sqare%204.mp4",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/sqare%205.mp4",
  ];

  return (
    <>
      {/* Sticky, blurred nav that stays readable over content */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Mobile-first container: centered with responsive horizontal padding */}
      <main className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        <section className="py-4" id='home'>
          <Hero />
        </section>

        <section className="py-4" id='works'>
          <MyWorks />
        </section>

        <section className="py-4" id='video-collage'>
          <VideoCollage videoLinks={videos} />
        </section>

        <section className="py-4" id='podcast'>
          <Tabs defaultValue="all" className="w-full flex items-center">
            <TabsList className="flex gap-[5px]">
              <TabsTrigger className="text-[#ffffff] :bg-[#0e0e0e] dark:text-[#0e0e0e] dark:bg-white" value="all">All</TabsTrigger>
              <TabsTrigger className="text-[#ffffff] :bg-[#0e0e0e] dark:text-[#0e0e0e] dark:bg-white" value="video">Videos</TabsTrigger>
              <TabsTrigger className="text-[#ffffff] :bg-[#0e0e0e] dark:text-[#0e0e0e] dark:bg-white" value="reels">Reels</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <PodcastFreeplay />
            </TabsContent>
            <TabsContent value="video">
              <Suspense fallback={<TabFallback />}>
                <AllVideos />
              </Suspense>
            </TabsContent>
            <TabsContent value="reels">
              <Suspense fallback={<TabFallback />}>
                <AllReels />
              </Suspense>
            </TabsContent>
          </Tabs>
        </section>

        <section className="py-4">
          <Posters />
        </section>

        <section className="py-4" id='reviews'>
          <ClientReviews />
        </section>

        <section className="py-4" id='about'>
          <AboutUsSection />
        </section>

        <section className="py-4" id='contact'>
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  )
}

export default App
