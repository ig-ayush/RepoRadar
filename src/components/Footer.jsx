export default function Footer() {
    return (
        <footer className="bg-white dark:bg-dark-bg border-t border-light-border dark:border-dark-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <img 
                            src="Assests/Icon.svg" 
                            alt="RepoRadar Logo" 
                            className="w-8 h-8" 
                        />
                        <h1 className="text-xl font-display font-bold text-light-text dark:text-dark-text">
                            RepoRadar
                        </h1>
                    </div>

                    {/* Links and Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
                        {/* Social Links */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a 
                                href="https://www.linkedin.com/in/ayush-acharya-65943132b/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                                <i className="fa-brands fa-linkedin text-lg"></i>
                                <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
                            </a>
                            
                            <a 
                                href="https://x.com/ig_ayushacharya" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                                <i className="fa-brands fa-x-twitter text-lg"></i>
                                <span className="hidden sm:inline text-sm font-medium">Twitter</span>
                            </a>
                            
                            <a 
                                href="https://github.com/ig-ayush" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                                <i className="fa-brands fa-github text-lg"></i>
                                <span className="hidden sm:inline text-sm font-medium">GitHub</span>
                            </a>
                        </div>

                        {/* Star Button */}
                        <a 
                            href="https://github.com/ig-ayush/RepoRadar" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            <i className="fa-solid fa-star text-sm"></i>
                            <span>Star on GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-8 border-t border-light-border dark:border-dark-border">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        <p>RepoRadar © 2025 — Powered by open APIs.</p>
                        <p>Built with React & Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}