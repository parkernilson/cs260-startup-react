import { createContext } from "react";
import { UserInfo } from "../interfaces";

export const UserContext = createContext({
    user: null as UserInfo | null,
    reloadUser: async () => {}
})