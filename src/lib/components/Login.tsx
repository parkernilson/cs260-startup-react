import { useState } from "react"
import Footer from "./Footer"
import { createUser, login, logout } from "../users/users"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        console.log("logging in!")
        try {
            await login(username, password)
            navigate("/soundboards")
        } catch(error) {
            console.error(error)
        }
    }

    const handleRegister = async () => {
        try {
            await createUser(username, password)
            navigate("/soundboards")
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="h-full flex flex-col">
            <header className="flex items-center justify-center text-4xl bg-blue-100 h-24">
                <h1 className="font-display">Storyteller</h1>
            </header>
            <main className="flex-1 flex items-center justify-center px-3">
                <div className="
                    shadow-md rounded-sm border border-black
                    px-8
                    py-4
                    flex flex-col items-center
                    w-full max-w-sm
                ">
                    <h1 className="font-body text-3xl mb-8">Welcome</h1>
                    <div className="
                    w-full flex flex-col items-center
                    ">
                        <input 
                            type="text" 
                            id="username-input" 
                            placeholder="Username" 
                            className="w-full mb-2 mx-3 px-3 border border-black rounded-sm"  
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input 
                            type="password" 
                            id="password-input" 
                            placeholder="Password" 
                            className="w-full mb-2 mx-3 px-3 border border-black rounded-sm"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <div className="w-full flex justify-evenly">
                            <button
                                className="rounded-full px-5 border border-black mt-8 bg-blue-100 hover:bg-blue-200"
                                onClick={handleLogin}
                            >Login</button>
                            <button
                                className=" rounded-full px-5 border border-black mt-8 bg-blue-100 hover:bg-blue-200 "
                                onClick={handleRegister}
                            >Register</button>
                        </div>
                    </div>
                    <a href="https://github.com/parkernilson/cs260-startup" className="mt-4 text-blue-400 hover:text-blue-600 cursor-pointer"><i className="fa-brands fa-github"></i> Check out my repo!</a>
                    <div id="user-info-display" className="flex flex-col">
                        <p id="username-info-slot"></p>
                        <button className="border border-black px-6" id="logout-button" onClick={() => logout()}>Log out</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Login