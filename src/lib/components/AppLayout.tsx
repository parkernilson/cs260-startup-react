import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { UserInfo } from "../interfaces";
import { UserContext } from "./UserContext";
import { WebSocketContext } from "./WebSocketContext";

const AppLayout = () => {
    const [user, setUser] = useState<UserInfo | null>(null)
    const [websocket, setWebsocket] = useState<WebSocket | null>(null)

    const getMe = () => fetch("/api/me").then(res => res.json()).then(({ user }) => user).then(setUser).catch(console.error)

    useEffect(() => {
        getMe()
        const protocol = window.location.protocol === "https:" ? "wss" : "ws"
        setWebsocket(new WebSocket(`${protocol}://${window.location.host}/ws`))
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            reloadUser: getMe
        }}>
            <WebSocketContext.Provider value={{ 
                websocket,
            }}>
                <div className="h-full flex flex-col">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </WebSocketContext.Provider>
        </UserContext.Provider>
    ) 
}

export default AppLayout