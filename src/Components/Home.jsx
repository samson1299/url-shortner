const Home = () => {
  return (
    <header>
        <div>
            <nav className="bg-[#1e293bf2] px-5 py-5 flex ">
                <button className="text-[#cbd5e1]">Platform</button>
                <button className="text-[#cbd5e1]">Solution</button>
                <button className="text-[#cbd5e1]">Plans</button>
            </nav>
        </div>
        <div>
            <button>Sign In</button>
            <button>Start Free</button>
        </div>
    </header>
  )
}

export default Home