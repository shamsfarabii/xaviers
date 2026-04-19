import { Briefcase, Menu, MessageCircle, Play, Star, User, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', icon: <User className="w-4 h-4" />, href: '#home' },
        { name: 'Works', icon: <Briefcase className="w-4 h-4" />, href: '#podcast' },
        { name: 'About', icon: <User className="w-4 h-4" />, href: '#about' },
        { name: 'Reviews', icon: <Star className="w-4 h-4" />, href: '#reviews' },
        { name: 'Contact', icon: <MessageCircle className="w-4 h-4" />, href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0e0e0e] backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo/Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <img src="/logo.png" className='w-[150px]' alt="Hero Image" />
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
                                <div className="absolute bottom-0 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center"
                    >
                        <Menu className="w-5 h-5 " />
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
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;