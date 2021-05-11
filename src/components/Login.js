import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    console.log(password)
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Email:",email)
        console.log("Password:",password)
        setEmail("")
        setPassword("")
    }
    return (
        <form onSubmit={handleLogin}> 
            Email : <input type="email" onChange={handleChange} value={email} /> <br />
            Password : <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
            <button type="submit" >Login</button>
        </form>
    )
}

export default Login
