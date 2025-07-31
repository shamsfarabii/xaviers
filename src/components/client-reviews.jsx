import React, { useEffect, useState } from 'react';

const ClientReviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: "/avatars/sarah.jpg",
            rating: 5,
            comment: "Xavier's content creation is absolutely phenomenal! The quality and creativity exceeded all my expectations. Highly recommend!"
        },
        {
            id: 2,
            name: "Michael Chen",
            avatar: "/avatars/michael.jpg",
            rating: 5,
            comment: "Working with Xavier was a game-changer for our brand. The video content drove amazing engagement and results."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            avatar: "/avatars/emily.jpg",
            rating: 5,
            comment: "Professional, creative, and delivers on time. Xavier's work speaks for itself - simply outstanding quality!"
        },
        {
            id: 4,
            name: "David Thompson",
            avatar: "/avatars/david.jpg",
            rating: 5,
            comment: "The storytelling and visual quality is next level. Xavier transformed our vision into something incredible."
        },
        {
            id: 5,
            name: "Lisa Wang",
            avatar: "/avatars/lisa.jpg",
            rating: 5,
            comment: "Exceptional attention to detail and creative vision. The final product was beyond what we imagined possible."
        },
        {
            id: 6,
            name: "James Wilson",
            avatar: "/avatars/james.jpg",
            rating: 5,
            comment: "Xavier's expertise in content creation is unmatched. Every project is handled with professionalism and creativity."
        }
    ];

    // Adjust reviews per slide based on screen size
    const getReviewsPerSlide = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 768) return 1; // Mobile
            if (window.innerWidth < 1024) return 2; // Tablet
            return 3; // Desktop
        }
        return 3;
    };

    const [reviewsPerSlide, setReviewsPerSlide] = useState(getReviewsPerSlide());
    const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setReviewsPerSlide(getReviewsPerSlide());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-advance slider every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 md:w-5 md:h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    const getCurrentReviews = () => {
        const startIndex = currentSlide * reviewsPerSlide;
        return reviews.slice(startIndex, startIndex + reviewsPerSlide);
    };

    return (
        <div className="bg-[#0e0e0e] text-white py-8 md:py-12 px-4 md:px-8">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-red-400 mb-2 md:mb-4">CLIENT</h2>
                <p className="text-2xl md:text-4xl lg:text-5xl text-white">Reviews</p>
            </div>

            {/* Slider Container */}
            <div className="max-w-7xl mx-auto relative">
                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-500">
                    {getCurrentReviews().map((review) => (
                        <div key={review.id} className="relative group">
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                            {/* Review Card */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 md:p-6 border border-red-500 h-full flex flex-col">
                                {/* Avatar and Name */}
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-red-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm md:text-lg mr-3 md:mr-4">
                                        {review.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-white">{review.name}</h3>
                                        <div className="flex items-center">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>
                                </div>

                                {/* Comment */}
                                <div className="flex-grow">
                                    <p className="text-gray-300 leading-relaxed italic text-sm md:text-base">
                                        "{review.comment}"
                                    </p>
                                </div>

                                {/* Verified Badge */}
                                <div className="mt-4 flex items-center text-xs md:text-sm text-green-400">
                                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Verified Client
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${index === currentSlide
                                ? 'bg-gradient-to-r from-red-500 to-purple-500 shadow-lg shadow-red-500/50'
                                : 'bg-gray-700 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;