import { useEffect, useState } from "react"
import  {RepoData, userData, PullRs}  from "../services/RepoData.js";

export default function Statistics({ repoURL, setError }) 
{
    const [repoData, setRepoData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                setLoading(true);
                const [owner, repo] = new URL(repoURL).pathname.slice(1).split("/")
                const Data = await RepoData(owner, repo);
                const user = await userData(owner);
                const pulls = await PullRs(owner, repo);
                
                const user_name = Data.full_name.split("/")[0];
                const mergePR = pulls.filter((m) => m.merged_at).length;
                const openPR = pulls.filter((o) => o.state == "open").length;
                const closePR = pulls.filter((c) => c.state == "closed").length;

                setRepoData({
                    repo: Data,
                    user: user_name,
                    user_profile: user.avatar_url,
                    PR: pulls.length,
                    mergePR,
                    openPR,
                    closePR
                });

                setError("");
                setLoading(false);
            } catch(err) {
                const errMsg = " ⚠️ Invalid or Not Found Repository URL";
                setError(errMsg);
                console.error(err)
                setLoading(false);
            }
        }
        fetchRepoData();
    }, [repoURL]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">Loading repository data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-3">
                    <img src="Assests/contribution.svg" alt="Contributors" className="w-6 h-6" />
                    <h2 className="text-lg lg:text-xl font-display font-bold text-light-text dark:text-dark-text">
                        Contributors
                    </h2>
                </div>
                <div className="inline-flex items-center px-3 py-2 bg-light-surface dark:bg-dark-bg rounded-lg">
                    <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                        Total contributors: 1
                    </span>
                </div>
            </div>

            {/* Contributor Card */}
            <div className="bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0 self-center sm:self-start">
                        <img 
                            src={repoData.user_profile} 
                            alt={`${repoData.user} profile`} 
                            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover ring-2 ring-light-border dark:ring-dark-border"
                        />
                    </div>

                    {/* User Info and Stats */}
                    <div className="flex-1 space-y-4">
                        {/* User Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <h3 className="text-lg lg:text-xl font-display font-semibold text-light-text dark:text-dark-text">
                                {repoData.user}
                            </h3>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-200 dark:border-primary-800 w-fit">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="w-3 h-3 mr-1.5"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                Contributor
                            </span>
                        </div>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Total PRs */}
                            <div className="flex items-center space-x-2 p-3 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" 
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <circle cx="18" cy="18" r="3"></circle>
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                    <line x1="6" x2="6" y1="9" y2="21"></line>
                                </svg>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">
                                        {repoData.PR} PRs
                                    </p>
                                </div>
                            </div>

                            {/* Merged PRs */}
                            <div className="flex items-center space-x-2 p-3 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" 
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#16a34a"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <circle cx="18" cy="18" r="3"></circle>
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">
                                        {repoData.mergePR} merged
                                    </p>
                                </div>
                            </div>

                            {/* Open PRs */}
                            <div className="flex items-center space-x-2 p-3 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="#eab308" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <circle cx="18" cy="18" r="3"></circle>
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                    <line x1="6" x2="6" y1="9" y2="21"></line>
                                </svg>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">
                                        {repoData.openPR} open
                                    </p>
                                </div>
                            </div>

                            {/* Closed PRs */}
                            <div className="flex items-center space-x-2 p-3 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="#dc2626" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <path d="M6 9v12"></path>
                                    <path d="m21 3-6 6"></path>
                                    <path d="m21 9-6-6"></path>
                                    <path d="M18 11.5V15"></path>
                                    <circle cx="18" cy="18" r="3"></circle>
                                </svg>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">
                                        {repoData.closePR} closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}