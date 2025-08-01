import { useState } from "react";

export default function RepoInput({ setRepoURL }) {
    const [inputValue, setInputValue] = useState("");
    
    const submit = (event) => {
        event.preventDefault();
        setRepoURL(inputValue);
    }
    
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl shadow-sm p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-display font-semibold text-light-text dark:text-dark-text mb-6">
                    Repository URL or Path
                </h2>
                
                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-2">
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="github.com/owner/repo"
                            className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-medium text-base sm:text-lg rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 group"
                        disabled={!inputValue.trim()}
                    >
                        <span>Get Statistics</span>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform duration-200"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}