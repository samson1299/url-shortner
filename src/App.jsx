import './App.css'
import './Components/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import SignIn from './Components/SignIn';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
