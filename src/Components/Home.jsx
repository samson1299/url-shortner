const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
                <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
                    <div className="relative">
                        {/* Navigation */}
                        <nav className="bg-[#1e293bf2] px-5 py-5 flex items-center justify-center gap-4 text-xl">
                            <button className="text-[#cbd5e1]">Platform</button>
                            <button className="text-[#cbd5e1]">Solution</button>
                            <button className="text-[#cbd5e1]">Plans</button>
                            <button className="text-[#cbd5e1]">Terms</button>
                        </nav>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-4">
                            <button className="text-[#cbd5e1] hover:text-white">
                                Sign In
                            </button>

                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Start Free
                            </button>
                        </div>
                    </div>
                </header>
                <main className="pt-30">
                    <section>
                        <div className="max-w-4xl mx-auto  justify-center items-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold pt-2 ">Transform your
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">long links</span>
                                into powerful URLs</h1>
                            <p className="pt-5 text-xl text-[#cbd5e1] mb-8 max-w-2xl mx-auto">Shorten, customize and track your links with advanced analytics. The complete solution to manage your digital campaigns.</p>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <input type="url" placeholder="Paste your URL here... (e.g. https://mysite.com/very-long-page)" className="w-half pl-4 pr-24 sm:pr-36 py-4 text-lg border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all duration-200 border-gray-300 focus:ring-blue-500 dark:bg-slate-900/80 dark:text-gray-100"></input>
                                <div className="absolute inset-y-0 right-2 flex items-center gap-1.5 pointer-events-none">
                                    <button type="button" className="pointer-events-auto inline-flex items-center justify-center h-9 w-9 rounded-lg text-red-600 dark:text-red-300 bg-red-50/70 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 hover:shadow-sm active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                    </svg>
                                    </button>
                                    <button type="button" title="Paste URL from clipboard" className="pointer-events-auto inline-flex items-center justify-center h-9 px-2.5 gap-1.5 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-50/70 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:shadow-sm active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path>
                                        </svg><span className="hidden sm:inline">Paste</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;