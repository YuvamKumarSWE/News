import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="background bg-paper">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>

    
    </BrowserRouter>
    
    </>
  )
}

export default App
