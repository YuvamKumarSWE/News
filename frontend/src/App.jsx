import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>

    
    </BrowserRouter>
    
    </>
  )
}

export default App
