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
import AllVideos from './components/all-video';
import { VideoCollage } from './components/video-collage'

function App() {

  const videos = [
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
    "https://youtu.be/oHg5SJYRHA0",
  ];

  
  return (
    <>
      {/* Sticky, blurred nav that stays readable over content */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Mobile-first container: centered with responsive horizontal padding */}
      <main className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        {/* Space sections vertically with responsive padding */}
        <section className="py-4" id='home'>
          <Hero />
        </section>

        <section className="py-4">
          <ReviewSection />
        </section>

        <section className="py-4" id='works'>
          <MyWorks />
        </section>

        <section className="py-4" id='video-collage'>
          <VideoCollage videoLinks={videos} />
        </section>

        <section className="py-4" id='podcast'>
          <Tabs defaultValue="all" className="w-full flex items-center">
            <TabsList className="flex gap-[5px] text-white bg-[#0e0e0e]">
              <TabsTrigger className="text-white bg-[#0e0e0e]" value="all">All</TabsTrigger>
              <TabsTrigger className="text-white bg-[#0e0e0e]" value="video">Videos</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <PodcastFreeplay />
            </TabsContent>
            <TabsContent value="video">
              <AllVideos />
            </TabsContent>
          </Tabs>
        </section>

        <section className="py-4" id='reviews'>
          <ClientReviews />
        </section>

        <section className="py-4" id='about'>
          <AboutUsSection />
        </section>

        <section className="py-4">
          <Posters />
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
