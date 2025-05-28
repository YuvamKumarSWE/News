import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        //validaton for password

        // Validation
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        
        // Proceed with submission
        try {
            // API call
            navigate("/dashboard");
        } catch(error) {
            setError("Login failed");
            console.error(error);
        }
    }

    return(
       <div className="flex justify-center min-h-screen items-center">
        <form onSubmit={handleSubmit} className="form">
            <h1 className="form-title">Login</h1>

            <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-box"
            name="email"
            />

            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input-box"
            name="password"
            />

            <button 
            type="submit" 
            className="submit-button"
            >
            Submit
            </button>

            {(error) && <p>{error}</p>}
            
            <p>Don't have an account? <b onClick={()=>navigate("/signup")} className="text-blue-700 underline cursor-pointer">Sign Up</b></p>

        </form>

        </div>
    );
}

export default Login;