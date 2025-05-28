import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error , setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        //validaton for password

        // Validation
        if (!email || !password || !confirmPassword || !name) {
            setError("Please fill in all fields");
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if(password != confirmPassword){
            setError("Passwords don't match");
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
            <h1 className="form-title">Sign Up</h1>

            <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-box"
            name="email"
            />

            <input 
            type="name" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="input-box"
            name="name"
            />

            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input-box"
            name="password"
            />

            <input 
            type="password" 
            placeholder="Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
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
            
            <p>Have an account? <b onClick={()=>navigate("/login")} className="text-blue-700 underline cursor-pointer">Login</b></p>

        </form>

        </div>
    );
}

export default SignUp;