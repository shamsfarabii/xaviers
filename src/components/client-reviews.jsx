import React, { useEffect, useRef, useState } from 'react';

const ClientReviews = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: "/avatars/sarah.jpg",
            rating: 5,
            comment: "Xavier's content creation is absolutely phenomenal! The quality and creativity exceeded all my expectations."
        },
        {
            id: 2,
            name: "Michael Chen",
            avatar: "/avatars/michael.jpg",
            rating: 5,
            comment: "Working with Xavier was a game-changer for our brand. The video content drove amazing engagement."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            avatar: "/avatars/emily.jpg",
            rating: 5,
            comment: "Professional, creative, and delivers on time. Xavier's work speaks for itself - outstanding quality!"
        },
        {
            id: 4,
            name: "David Thompson",
            avatar: "/avatars/david.jpg",
            rating: 5,
            comment: "The storytelling and visual quality is next level. Xavier transformed our vision into something incredible."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-red-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div 
            ref={sectionRef}
            className="bg-[#0e0e0e] text-white py-16 px-4"
            id="reviews"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <p className="text-sm font-semibold text-red-400 tracking-wider uppercase mb-4">
                        TESTIMONIAL
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        We Care About Our Customers
                    </h2>
                    <p className="text-4xl md:text-5xl font-bold text-white">
                        Experience Too
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className={`transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Review Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-red-500/30 hover:border-red-500">
                                {/* Avatar */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-red-400 transition-colors duration-300">
                                        <div className="w-full h-full bg-gradient-to-r from-red-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                                            {review.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {review.name}
                                </h3>

                                {/* Comment */}
                                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                    {review.comment}
                                </p>

                                {/* Stars */}
                                <div className="flex justify-center items-center">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;