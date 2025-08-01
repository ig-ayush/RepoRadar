export default function Info() {
    return (
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-light-text dark:text-dark-text mb-6">
                RepoRadar
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-3xl mx-auto">
                Analyze GitHub repository contributions to discover active GSoC participants and track their 
                pull request activity across projects.
            </p>
        </div>
    )
}