
export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative">
        <img
          src="mask.png"
          alt="Hero Image"
          className="w-full mt-16 sm:mt-20 object-cover"
        />
      </div>

      {/* Animated Arrow (desktop only) */}
      <img
        src="arrow.gif"
        alt="Arrow"
        className="hidden lg:block absolute top-[40%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] xl:w-[450px]"
      />

      {/* Main Content */}
      <div className="
        absolute 
        top-[45%] sm:top-[55%] lg:top-[60%]
        left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 
        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] 
        z-20
      ">
        {/* Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 text-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold">
            Title
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nanum-pen-script font-bold text-red-400">
            Asdsdsadf
          </p>
        </div>

        {/* YouTube Embed */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/n5weFijjBSU?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
