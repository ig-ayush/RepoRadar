import { useState } from "react";
import Info from "../components/Info"
import RepoInput from "../components/RepoInput"
import RepoResult from "./RepoResult";

export default function Home() {
    const [repoURL, setRepoURL] = useState("");

    return (
        <main className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="space-y-12 lg:space-y-16">
                    <Info />
                    <RepoInput setRepoURL={setRepoURL} />
                    <RepoResult repoURL={repoURL} />
                </div>
            </div>
        </main>
    )
}