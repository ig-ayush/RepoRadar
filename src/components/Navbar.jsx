import { useEffect, useState } from "react"

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check for saved theme preference or default to dark
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : true;
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement;
        const bodyElement = document.body;
        
        if (isDarkMode) {
            htmlElement.classList.add('dark');
            bodyElement.classList.add('dark');
            bodyElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            bodyElement.classList.remove('dark');
            bodyElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);
    
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="bg-white dark:bg-dark-bg border-b border-light-border dark:border-dark-border transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img 
                            src="Assests/Icon.svg" 
                            alt="RepoRadar Logo" 
                            className="w-8 h-8 md:w-10 md:h-10" 
                        />
                        <h1 className="text-xl md:text-2xl font-display font-bold text-light-text dark:text-dark-text">
                            RepoRadar
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a 
                            href="https://github.com/ig-ayush/RepoRadar" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            <i className="fa-solid fa-star text-sm"></i>
                            <span>Star on GitHub</span>
                        </a>
                        
                        {/* Theme Toggle */}
                        <div className="toggle-switch">
                            <label className="switch-label">
                                <input 
                                    type="checkbox" 
                                    className="checkbox" 
                                    checked={!isDarkMode}
                                    onChange={toggleTheme}
                                    aria-label="Toggle theme"
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Theme Toggle */}
                        <div className="toggle-switch scale-75">
                            <label className="switch-label">
                                <input 
                                    type="checkbox" 
                                    className="checkbox" 
                                    checked={!isDarkMode}
                                    onChange={toggleTheme}
                                    aria-label="Toggle theme"
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                        
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-primary-500"
                            aria-expanded="false"
                            aria-label="Toggle mobile menu"
                        >
                            <svg 
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                                stroke="currentColor" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg 
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                                stroke="currentColor" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
                    <div className="pt-2 pb-3 space-y-1">
                        <a 
                            href="https://github.com/ig-ayush/RepoRadar" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 mx-2"
                        >
                            <i className="fa-solid fa-star text-sm"></i>
                            <span>Star on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}