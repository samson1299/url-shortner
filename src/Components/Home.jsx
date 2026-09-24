const Home = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
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
            <main>
                <div className="mt-40 justify-center items-center">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900  ">Transform your <span  class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">long links</span> into powerful URLs</h1>
                </div>
            </main>
        </>
    );
};

export default Home;