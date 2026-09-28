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
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            <label className="group relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm dark:border-slate-600 dark:hover:border-blue-400">
                                <input type="checkbox" className="sr-only" />
                                <div className="flex flex-col items-center gap-2 mt-1">
                                    <div class="p-2 rounded-lg transition-colors duration-300 bg-blue-100 group-hover:bg-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 transition-colors duration-300 text-blue-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-center transition-colors duration-300 text-gray-700 group-hover:text-blue-600">Custom Link</span>
                                </div>
                            </label>
                            <label className="group relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm dark:border-slate-600 dark:hover:border-emerald-400">
                                <input type="checkbox" className="sr-only" data-testid="landing-option-password" />
                                <div className="flex flex-col items-center gap-2 mt-1">
                                    <div className="p-2 rounded-lg transition-colors duration-300 bg-emerald-100 group-hover:bg-emerald-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 transition-colors duration-300 text-emerald-600">
                                      </svg>
                                      </div>
                                      <span data-v-a79b16bd="" className="text-sm font-semibold text-center transition-colors duration-300 text-gray-700 group-hover:text-emerald-600">Password Protection</span>
                                </div>
                            </label>
                            <label className="group relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm dark:border-slate-600 dark:hover:border-purple-400">
                                <input type="checkbox" className="sr-only" data-testid="landing-option-dates" />
                                <div className="flex flex-col items-center gap-2 mt-1">
                                    <div className="p-2 rounded-lg transition-colors duration-300 bg-purple-100 group-hover:bg-purple-200">
                                        <svg data-v-a79b16bd="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 transition-colors duration-300 text-purple-600">
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-center transition-colors duration-300 text-gray-700 group-hover:text-purple-600">Set Expiration</span>
                                </div>
                            </label>
                            <label className="group relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border-gray-200 bg-white hover:border-amber-300 hover:shadow-sm dark:border-slate-600 dark:hover:border-amber-400">
                                <input type="checkbox" className="sr-only" data-testid="landing-option-qrcode" />
                                <div className="flex flex-col items-center gap-2 mt-1">
                                    <div className="p-2 rounded-lg transition-colors duration-300 bg-amber-100 group-hover:bg-amber-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 transition-colors duration-300 text-amber-600"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z">
                                        </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-center transition-colors duration-300 text-gray-700 group-hover:text-amber-600">Generate QR Code</span>
                                </div>
                            </label>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;