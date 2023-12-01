import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { UserInfo } from "../interfaces";
import { UserContext } from "./UserContext";

const AppLayout = () => {
    const [user, setUser] = useState<UserInfo | null>(null)

    const getMe = () => fetch("/api/me").then(res => res.json()).then(({ user }) => user).then(setUser).catch(console.error)

    useEffect(() => {
        getMe()
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            reloadUser: getMe
        }}>
            <div className="h-full flex flex-col">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
    ) 
}

export default AppLayout