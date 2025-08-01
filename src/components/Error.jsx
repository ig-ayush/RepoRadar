export default function Error({ error }) {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 lg:py-16">
            <div className="bg-red-50 dark:bg-red-900/20 p-8 lg:p-12 rounded-full mb-8">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 lg:w-16 lg:h-16 text-red-500"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            </div>

            <div className="text-center max-w-md mx-auto px-4">
                <h2 className="text-xl lg:text-2xl font-display font-bold text-red-600 dark:text-red-400 mb-4">
                    Error
                </h2>
                <p className="text-sm lg:text-base text-red-600 dark:text-red-400 leading-relaxed">
                    {error}
                </p>
            </div>
        </div>
    )
}