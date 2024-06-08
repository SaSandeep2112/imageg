import Navbar from "../common/Navbar/navbar";
import {useState} from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleClick = async() => {
        if(!email && !password){
            return;
        }
        const res = await fetch(`http://localhost:1600/api/v1/auth/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        console.log(data);
    }

    return (
        <>
            <Navbar page='signup'/>
            <div>
                <input onChange={(e)=>setEmail(e.target.value)}/>
                <input onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleClick}>Signup</button>
            </div>
        </>
    )
}

export default Signup;