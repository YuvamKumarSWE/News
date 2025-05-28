import { useState, useEffect } from "react";
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

        try{
            // backend login
            navigate("/dashboard")
        } catch(error){
            setError(error);
            console.log(error);
        }
    }

    return(
        <>
            <form onSubmit={()=>{console.log("Hi")}}>
                
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-box" />

                <input type="password" name="" id="" hidden onChange={(e)=>setPassword(e.target.value)} className="input-box"/>
            </form>
        </>
    );
}

export default Login;