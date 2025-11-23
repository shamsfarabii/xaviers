import { Mail, Phone, Send, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    });
    const sectionRef = useRef(null);

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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div
            ref={sectionRef}
            className="bg-[#0e0e0e] text-white py-12 px-4 relative"
            id="contact"
        >
            {/* Background mask overlays */}
            <div className="absolute inset-0 hidden md:flex justify-between items-center pointer-events-none z-0">
                <img src="/MaskLeft.png" alt="" className="h-[300px] lg:h-[400px] opacity-30 object-contain" />
                <img src="/MaskRight.png" alt="" className="h-[300px] lg:h-[400px] opacity-30 object-contain" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Contact <span className="text-red-400">Us</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        For your project pricing contact with us
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Contact Form */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="relative group">
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                            {/* Form Container */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-red-500">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Name"
                                            className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    {/* Email and Phone Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Your E-mail"
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+01634633244"
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Description Textarea */}
                                    <div className="relative">
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="Write Some Description about your project if you want."
                                            rows={5}
                                            className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full relative group bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Send className="h-5 w-5" />
                                        SUBMIT
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info & Social Links */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        {/* Contact Info Cards */}
                        <div className="space-y-6 mb-12">
                            {/* Email Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-blue-500">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div className='flex flex-col items-start '>
                                            <h3 className="text-lg font-semibold text-white">Email</h3>
                                            <p className="text-gray-300">xavier@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-green-500">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div className='flex flex-col items-start '>
                                            <h3 className="text-lg font-semibold text-white">Phone</h3>
                                            <p className="text-gray-300">+01634633244</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
                                Contact <span className="text-red-400">Us</span>
                            </h2>
                            <div className="flex justify-center gap-6">
                                {/* Facebook */}
                                <a
                                    href="#"
                                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                                >
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-lg">f</span>
                                    </div>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                                >
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-pink-600 font-bold text-lg">@</span>
                                    </div>
                                </a>

                                {/* Behance */}
                                <a
                                    href="#"
                                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                                >
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-blue-500 font-bold text-lg">Be</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}