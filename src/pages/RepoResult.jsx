import { useState, useEffect } from "react";
import Statistics from "../components/Statistics"
import { NoData } from "../components/NoData"
import Error from "../components/Error"

export default function RepoResult({ repoURL }) {
  const [error, setError] = useState("");

    useEffect(() => {
      if (repoURL !== "") {
        setError("");
      }
    }, [repoURL]);

    const showNoData = repoURL === "";
    const showError = error !== "";
    const showStats = !showNoData && !showError;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl shadow-sm p-6 lg:p-8">
                {showNoData && <NoData />}
                {showStats && <Statistics repoURL={repoURL} setError={setError} />}
                {showError && <Error error={error} />}
            </div>
        </div>
    )
}