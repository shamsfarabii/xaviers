
import { useState } from 'react';
import useInView from '../hooks/useInView';
import { Mail, Phone, Send, User } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaBehance } from 'react-icons/fa';

export default function Contact() {
    const [sectionRef, isVisible] = useInView();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div
            ref={sectionRef}
            className="bg-transparent text-[#F5EFE2] py-12 px-4 relative"
            id="contact"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : ''
                    }`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#F5EFE2] mb-6">
                        Contact <span className="text-[#ff7a3c]">Us</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        For your project pricing contact with us
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Contact Form */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-up' : ''
                        }`}>
                        <div className="relative group">
                            {/* Orange glow border */}
                            <div className="absolute inset-0 rounded-lg border border-[#ff7a3c]/20 opacity-50"></div>

                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-[#ff7a3c]">
                                <form onSubmit={handleSubmit} className="space-y-6">
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
                                            className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-[#F5EFE2] placeholder-gray-400 focus:border-[#ff7a3c] focus:outline-none transition-colors duration-300"
                                            required
                                        />
                                    </div>

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
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-[#F5EFE2] placeholder-gray-400 focus:border-[#ff7a3c] focus:outline-none transition-colors duration-300"
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
                                                placeholder="+01234567890"
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-[#F5EFE2] placeholder-gray-400 focus:border-[#ff7a3c] focus:outline-none transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="Write Some Description about your project if you want."
                                            rows={5}
                                            className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-[#F5EFE2] placeholder-gray-400 focus:border-[#ff7a3c] focus:outline-none transition-colors duration-300 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full relative group bg-[linear-gradient(135deg,#ff7a3c_0%,#ff5a2a_100%)] text-[#F5EFE2] px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Send className="h-5 w-5" />
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-up' : ''
                        }`}>
                        <div className="space-y-6 mb-12">
                            <div className="relative group">
                                <div className="absolute inset-0 rounded-lg border border-[#ff7a3c]/20 opacity-50"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-[#ff7a3c]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-[#F5EFE2]" />
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <h3 className="text-lg font-semibold text-[#F5EFE2]">Email</h3>
                                            <p className="text-gray-300">hello@xaviermediaagency.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 rounded-lg border border-[#ff7a3c]/20 opacity-50"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-[#ff7a3c]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-[#F5EFE2]" />
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <h3 className="text-lg font-semibold text-[#F5EFE2]">Phone</h3>
                                            <p className="text-gray-300">+8801537711112</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6">
                            <a
                                href="https://www.facebook.com/mediaxavier"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <FaFacebookF className="text-white text-2xl" />
                            </a>

                            <a
                                href="https://www.instagram.com/_.xaviermedia._/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <FaInstagram className="text-white text-2xl" />
                            </a>

                            <a
                                href="https://www.behance.net/xaviermedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <FaBehance className="text-white text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
