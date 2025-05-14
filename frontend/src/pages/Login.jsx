import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    return(
        <>
            <form onSubmit={()=>{console.log("Hi")}}>
                
                <input type="email" placeholder="Email" value={email}  />

                <input type="password" name="" id="" />
            </form>
        </>
    );
}

export default Login;