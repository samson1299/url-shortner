import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [rememberMe, setrememberMe] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  console.log({ email, password });
  function handleClear() {
    setEmail('')
    setPassword('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (

    <div className="bg-[#161f32] h-screen   ">
      <div className="flex flex-col justify-center items-center text-white ">
        <h1 className="text-3xl pt-13 pb-4 text-[#f3f4f6]">Welcome back</h1>
        <p className="text-[#cbd5e1] ">Don't have an account? <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors" data-testid="login-register-link">Create one now</Link></p>
      </div>
      <div className="mt-8 sm:mx-auto sm:max-w-md ">
        <div className="bg-[rgb(30 41 59)] py-8 px-6 rounded-2xl sm:px-10 border border-gray-500 ">
          <div className="flex justify-center mb-8 ">
            <span className="text-3xl font-black bg-gradient-to-r from-fuchsia-700 via-blue-700 to-cyan-600 bg-clip-text text-transparent tracking-tight"> LinkShort </span>
          </div>
          <div className="text-xs m-3 text-slate-400 font-medium -mt-1 tracking-widest font-bunken"> SMART LINKS </div>
          <div className="mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[rgb(30 41 59)] rounded-xl shadow-sm text-sm font-medium text-[#d1d5db] bg-[rgb(30 41 59)] hover:bg-[#475569] hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg> Continue with Google</button>

          </div>
          <div className="text-[#94a3b8] relative flex justify-center items-center">
            or continue with email
          </div>
          <form action="" onSubmit={handleSubmit} autoComplete= "off">
            <label className="text-[#cbd5e1] m-2 pb-4">Email</label>
            <div className="flex ">
              <input type="email" autoComplete= "off" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="block w-full rounded-lg border-0 ring-1 ring-inset bg-gray-50/80 dark:bg-slate-900/80 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 outline-none transition-all duration-200 ease-out focus:bg-white dark:focus:bg-slate-800 focus:ring-2 px-3.5 py-3 text-sm pl-10  ring-gray-300 dark:ring-slate-600 focus:ring-indigo-500/70 rounded-xl"></input>
            </div>
            <label className="text-[#cbd5e1] m-2 pb-4">Password</label>

            <div className="flex ">
              <input value={password} autoComplete= "off" name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="block w-full rounded-lg border-0 ring-1 ring-inset bg-gray-50/80 dark:bg-slate-900/80 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 outline-none transition-all duration-200 ease-out focus:bg-white dark:focus:bg-slate-800 focus:ring-2 px-3.5 py-3 text-sm pl-10  ring-gray-300 dark:ring-slate-600 focus:ring-indigo-500/70 rounded-xl"></input>
            </div>
            <div className="m-4">
              <input type="checkbox" checked={rememberMe} onChange={(e) => setrememberMe(e.target.checked)} className="bg-[#1e293b] border-[#475569] size-5" /> <span className="text-[#d1d5db] text-xl">Remember me</span>
              <span className="flex justify-end items-end text-blue-500 hover:text-blue-400 cursor-pointer relative">Forget Password</span>
            </div>
            <div className="m-5 relative flex justify-center items-center">
              <button onClick={handleClear} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors duration-200">
                Sign In
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default SignIn