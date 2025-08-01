export function NoData() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 lg:py-16">
            <div className="bg-light-surface dark:bg-dark-bg p-8 lg:p-12 rounded-full mb-8">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 lg:w-16 lg:h-16 text-primary-500"
                >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                </svg>
            </div>

            <div className="text-center max-w-md mx-auto px-4">
                <h2 className="text-xl lg:text-2xl font-display font-bold text-light-text dark:text-dark-text mb-4">
                    No data to display
                </h2>
                <p className="text-sm lg:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    Enter a GitHub repository URL and select a time period to analyze contributions and pull requests.
                </p>
            </div>
        </div>
    )
}