export function NoData() {
    return(
         <main className=" w-full h-auto flex flex-col items-center justify-center  gap-5 rounded-lg">
            <div id="nodata-icon" className="bg-[#272e36] p-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-refresh-cw w-16 h-16 text-blue-500 dark:text-blue-400">
                 <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                 <path d="M21 3v5h-5"></path>
                 <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                 <path d="M8 16H3v5"></path>
            </svg>
            </div>

            <div id="Informations" className="text-center">
                <h1 className="text-2xl font-bold p-2.5">No data to display</h1>
                <h2 className="font-semibold text-[#5d7086] text-lg">Enter a GitHub repository URL and select a time period to <br /> analyze contributions and pull requests.</h2>
            </div>
         </main>
    )
}