import { Briefcase, Menu, MessageCircle, Play, Star, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', icon: <User className="w-4 h-4" />, href: '#home' },
        { name: 'Works', icon: <Briefcase className="w-4 h-4" />, href: '#works' },
        { name: 'Podcast', icon: <Play className="w-4 h-4" />, href: '#podcast' },
        { name: 'Reviews', icon: <Star className="w-4 h-4" />, href: '#reviews' },
        { name: 'Contact', icon: <MessageCircle className="w-4 h-4" />, href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-red-500/30'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">X</span>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-lg blur opacity-30 animate-pulse"></div>
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-500/10"
                            >
                                <div className="flex items-center space-x-2 text-gray-300 group-hover:text-white">
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <div className="relative bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-500 hover:to-purple-500 transition-all duration-200">
                            Let's Work
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center"
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5 text-white" />
                        ) : (
                            <Menu className="w-5 h-5 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="py-4 space-y-2 border-t border-red-500/30">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-red-500/10 transition-all duration-200"
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </a>
                        ))}
                        <div className="px-4 pt-4">
                            <button className="w-full relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-lg blur opacity-75"></div>
                                <div className="relative bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold w-full">
                                    Let's Work
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
        </nav>
    );
};

export default Navigation;